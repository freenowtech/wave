import { HeightProps, MarginProps, WidthProps } from 'styled-system';

function removeUndefinedKeys(object) {
    Object.keys(object).forEach(key => (object[key] === undefined ? delete object[key] : ''));
}

type ExtractProps<T extends { [key: string]: { [key: string]: any } }> = <Props extends T[keyof T]>(
    props: Props
) => T & { restProps: Omit<Props, keyof T[keyof T]> };

export type ClassNameProps = Partial<{
    className?: string;
}>;

const extractClassNameProps: ExtractProps<{ classNameProps: ClassNameProps }> = props => {
    const { className, ...restProps } = props;
    const classNameProps = { className };

    removeUndefinedKeys(classNameProps);

    return {
        classNameProps,
        restProps
    };
};

const extractWidthProps: ExtractProps<{ widthProps: WidthProps }> = props => {
    const { width, ...restProps } = props;
    const widthProps = { width };

    removeUndefinedKeys(widthProps);

    return {
        widthProps,
        restProps
    };
};

const extractHeightProps: ExtractProps<{ heightProps: HeightProps }> = props => {
    const { height, ...restProps } = props;
    const heightProps = { height };

    removeUndefinedKeys(heightProps);

    return {
        heightProps,
        restProps
    };
};

const extractWrapperMarginProps: ExtractProps<{ marginProps: MarginProps }> = props => {
    const {
        m,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        mt,
        mr,
        mb,
        ml,
        mx,
        my,
        marginX,
        marginY,
        ...restProps
    } = props;

    const marginProps = {
        m,
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginX,
        marginY,
        mt,
        mr,
        mb,
        ml,
        mx,
        my
    };

    removeUndefinedKeys(marginProps);

    return {
        marginProps,
        restProps
    };
};

export { extractClassNameProps, extractWidthProps, extractHeightProps, extractWrapperMarginProps };
