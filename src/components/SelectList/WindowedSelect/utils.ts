/*!
 * Vendored from react-windowed-select (https://github.com/jacobworrel/react-windowed-select)
 * via the wave-react-windowed-select fork. Copyright (c) 2019 Jacob Worrel. MIT License.
 */
import React, { type ReactElement, type ReactNode } from 'react';
import { type CSSObjectWithLabel, type GroupBase, type OptionsOrGroups } from 'react-select';

interface MenuChildProps {
    children?: ReactNode;
    type?: string;
    isFocused?: boolean;
    inputValue?: string;
    data?: { options?: readonly unknown[] };
    selectProps?: {
        noOptionsMessage?: (object: { inputValue?: string }) => ReactNode;
        loadingMessage?: (object: { inputValue?: string }) => ReactNode;
    };
}

/** An element rendered by react-select inside the menu list (option, group, or message) */
export type MenuChild = ReactElement<MenuChildProps>;

const DEFAULT_ITEM_HEIGHT = 35;
const DEFAULT_GROUP_HEADING_HEIGHT = 25;

/** react-select styles are CSS values; only numeric (pixel) values can be used for virtualization maths */
export const toNumber = (value: unknown, fallback: number): number => (typeof value === 'number' ? value : fallback);

const isGroup = (option: unknown): option is GroupBase<unknown> =>
    typeof option === 'object' && option !== null && (option as GroupBase<unknown>).options !== undefined;

export const calcOptionsLength = (options: OptionsOrGroups<unknown, GroupBase<unknown>> = []): number => {
    if (!isGroup(options[0])) {
        return options.length;
    }

    let length = 0;
    options.forEach(group => {
        length += (group as GroupBase<unknown>).options.length;
    });

    return length;
};

export const flattenGroupedChildren = (children: MenuChild[]): MenuChild[] =>
    children.flatMap(child => {
        if (typeof child.props.children === 'string') {
            return [child];
        }

        const nestedChildren = (child.props.children ?? []) as MenuChild[];

        // The group element without its options renders only the group heading
        // eslint-disable-next-line @eslint-react/no-clone-element
        return [React.cloneElement(child, { type: 'group' }, []), ...nestedChildren];
    });

export const getCurrentIndex = (children: MenuChild[]): number =>
    Math.max(
        children.findIndex(child => child.props.isFocused === true),
        0
    );

interface HeightStyles {
    groupHeadingStyles: CSSObjectWithLabel;
    noOptionsMsgStyles: CSSObjectWithLabel;
    optionStyles: CSSObjectWithLabel;
    loadingMsgStyles: CSSObjectWithLabel;
}

export const createGetHeight =
    ({ groupHeadingStyles, noOptionsMsgStyles, optionStyles, loadingMsgStyles }: HeightStyles) =>
    (child: MenuChild): number => {
        const { type, children, inputValue, selectProps: { noOptionsMessage, loadingMessage } = {} } = child.props;

        if (type === 'group') {
            return toNumber(groupHeadingStyles.height, DEFAULT_GROUP_HEADING_HEIGHT);
        }

        if (type === 'option') {
            return toNumber(optionStyles.height, DEFAULT_ITEM_HEIGHT);
        }

        if (typeof noOptionsMessage === 'function' && children === noOptionsMessage({ inputValue })) {
            return toNumber(noOptionsMsgStyles.height, DEFAULT_ITEM_HEIGHT);
        }

        if (typeof loadingMessage === 'function' && children === loadingMessage({ inputValue })) {
            return toNumber(loadingMsgStyles.height, DEFAULT_ITEM_HEIGHT);
        }

        return DEFAULT_ITEM_HEIGHT;
    };
