/*!
 * Vendored from react-windowed-select (https://github.com/jacobworrel/react-windowed-select)
 * via the wave-react-windowed-select fork. Copyright (c) 2019 Jacob Worrel. MIT License.
 */
import React, {
    type CSSProperties,
    forwardRef,
    type HTMLAttributes,
    type ReactNode,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import { type CSSObjectWithLabel, type GroupBase, type MenuListProps } from 'react-select';
import { type ListChildComponentProps, VariableSizeList } from 'react-window';
import { createGetHeight, flattenGroupedChildren, getCurrentIndex, type MenuChild, toNumber } from './utils';

interface Measurement {
    index: number;
    measuredHeight: number;
}

interface MenuItemProps {
    data: ReactNode;
    index: number;
    setMeasuredHeight: (measurement: Measurement) => void;
}

const MenuItem = ({ data, index, setMeasuredHeight }: MenuItemProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // using useLayoutEffect prevents bounciness of options of re-renders
    useLayoutEffect(() => {
        if (ref.current) {
            const measuredHeight = ref.current.getBoundingClientRect().height;

            setMeasuredHeight({ index, measuredHeight });
        }
    }, [index, setMeasuredHeight]);

    return (
        <div key={`option-${index}`} ref={ref}>
            {data}
        </div>
    );
};

const getMenuListClassName = (classNamePrefix: string | null | undefined, isMulti: boolean): string => {
    if (!classNamePrefix) {
        return '';
    }

    return isMulti
        ? `${classNamePrefix}__menu-list ${classNamePrefix}__menu-list--is-multi`
        : `${classNamePrefix}__menu-list`;
};

export const WindowedMenuList = <Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
    props: MenuListProps<Option, IsMulti, Group>
) => {
    const { children: menuChildren, getStyles, innerRef, selectProps } = props;

    const children = useMemo(() => {
        // Virtualization needs the rendered options as a flat, indexable list
        // eslint-disable-next-line @eslint-react/no-children-to-array
        const childArray = React.Children.toArray(menuChildren) as MenuChild[];
        const head = childArray[0];

        if (React.isValidElement(head)) {
            const { options = [] } = head.props.data ?? {};
            const isGrouped = options.length > 0;

            return isGrouped ? flattenGroupedChildren(childArray) : childArray;
        }

        return [];
    }, [menuChildren]);

    // react-select types each style key against its own component's props; the menu list props are passed for all of them
    const getStyle = getStyles as (key: string, styleProps: unknown) => CSSObjectWithLabel;
    const getHeight = createGetHeight({
        groupHeadingStyles: getStyle('groupHeading', props),
        loadingMsgStyles: getStyle('loadingMessage', props),
        noOptionsMsgStyles: getStyle('noOptionsMessage', props),
        optionStyles: getStyle('option', props)
    });

    // Styles only change together with the children, so the children are enough to invalidate the heights
    // eslint-disable-next-line react-hooks/exhaustive-deps, @eslint-react/exhaustive-deps
    const heights = useMemo(() => children.map(child => getHeight(child)), [children]);
    const currentIndex = useMemo(() => getCurrentIndex(children), [children]);

    const itemCount = children.length;

    const [measuredHeights, setMeasuredHeights] = useState<Record<number, number>>({});

    // calc menu height
    const {
        maxHeight,
        paddingBottom: menuPaddingBottom,
        paddingTop: menuPaddingTop,
        ...menuListStyle
    } = getStyle('menuList', props);
    const paddingBottom = toNumber(menuPaddingBottom, 0);
    const paddingTop = toNumber(menuPaddingTop, 0);
    const totalHeight = useMemo(() => {
        let sum = 0;
        heights.forEach((height, index) => {
            sum += measuredHeights[index] || height;
        });

        return sum;
    }, [heights, measuredHeights]);
    const totalMenuHeight = totalHeight + paddingBottom + paddingTop;
    const menuHeight = Math.min(toNumber(maxHeight, totalMenuHeight), totalMenuHeight);
    const estimatedItemSize = Math.floor(totalHeight / itemCount);

    const { classNamePrefix, isMulti } = selectProps;
    const listRef = useRef<VariableSizeList>(null);

    useEffect(() => {
        // Measurements belong to the previous options — intentional reset when the options change
        // eslint-disable-next-line @eslint-react/set-state-in-effect
        setMeasuredHeights({});
    }, [menuChildren]);

    // method to pass to inner item to set this items outer height
    const setMeasuredHeight = ({ index, measuredHeight }: Measurement) => {
        if (measuredHeights[index] !== undefined && measuredHeights[index] === measuredHeight) {
            return;
        }

        setMeasuredHeights(previousMeasuredHeights => ({
            ...previousMeasuredHeights,
            [index]: measuredHeight
        }));

        // this forces the list to rerender items after the item positions resizing
        if (listRef.current) {
            listRef.current.resetAfterIndex(index);
        }
    };

    useEffect(() => {
        /**
         * enables scrolling on key down arrow
         */
        if (currentIndex >= 0 && listRef.current !== null) {
            listRef.current.scrollToItem(currentIndex);
        }
    }, [currentIndex, children]);

    return (
        <VariableSizeList
            className={getMenuListClassName(classNamePrefix, isMulti)}
            style={menuListStyle as CSSProperties}
            ref={listRef}
            outerRef={innerRef}
            estimatedItemSize={estimatedItemSize}
            innerElementType={forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ style, ...rest }, ref) => (
                <div
                    ref={ref}
                    style={{
                        ...style,
                        height: `${Number.parseFloat(String(style?.height)) + paddingBottom + paddingTop}px`
                    }}
                    {...rest}
                />
            ))}
            height={menuHeight}
            width="100%"
            itemCount={itemCount}
            itemData={children}
            itemSize={index => measuredHeights[index] || heights[index]}
        >
            {({ data, index, style }: ListChildComponentProps<MenuChild[]>) => (
                <div
                    style={{
                        ...style,
                        top: `${Number.parseFloat(String(style.top)) + paddingTop}px`
                    }}
                >
                    <MenuItem data={data[index]} index={index} setMeasuredHeight={setMeasuredHeight} />
                </div>
            )}
        </VariableSizeList>
    );
};
