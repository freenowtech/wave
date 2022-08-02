import { FC } from 'react';
import * as React from 'react';
import { PropsTable } from '../../../docs/PropsTable';

export const TablePropsTable: FC = () => {
    const props = [
        {
            name: 'rowStyle',
            type: 'lines | zebra | blank',
            description: 'Row style (background colors, borders, etc.) for the table',
            defaultValue: ''
        },
        {
            name: 'rowSize',
            type: 'large | normal | small | <string> (any valid CSS <td> height value)',
            description:
                'The height of the table rows. More info: https://developer.mozilla.org/en-US/docs/Web/CSS/height',
            defaultValue: 'normal'
        },
        {
            name: 'columnSpace',
            type: 'normal | small | <string> (any valid CSS <td> padding value)',
            description: 'The space between columns of the table (any CSS value will be divided by 2 using `calc`).',
            defaultValue: 'normal'
        }
    ];
    return <PropsTable props={props} />;
};

export const TableRowPropsTable: FC = () => {
    const props = [
        {
            name: 'active',
            type: 'boolean',
            description: 'Triggers the active (click, press, tap, etc.) state styling on the table row',
            defaultValue: 'false'
        },
        {
            name: 'hover',
            type: 'boolean',
            description: 'Triggers the hover state styling on the table row',
            defaultValue: 'false'
        }
    ];
    return <PropsTable props={props} />;
};

export const TableHeaderCellPropsTable: FC = () => {
    const props = [
        {
            name: 'textAlign',
            type: 'center | end | justify | left | match-parent | right | start | <string>',
            description:
                'The text-align CSS property specifies the horizontal alignment of an inline or table-cell box. More info: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
            defaultValue: 'start'
        },
        {
            name: 'LayoutProps',
            type: '(any valid CSS value)',
            description:
                'A convenience style group containing props related to layout such as width, height, and display. More info: https://styled-system.com/api#layout',
            defaultValue: ''
        }
    ];
    return <PropsTable props={props} />;
};

export const TableCellPropsTable: FC = () => {
    const props = [
        {
            name: 'textAlign',
            type: 'center | end | justify | left | match-parent | right | start | <string>',
            description:
                'The text-align CSS property specifies the horizontal alignment of an inline or table-cell box. More info: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align',
            defaultValue: 'start'
        },
        {
            name: 'LayoutProps',
            type: '(any valid CSS value)',
            description:
                'A convenience style group containing props related to layout such as width, height, and display. More info: https://styled-system.com/api#layout',
            defaultValue: ''
        }
    ];
    return <PropsTable props={props} />;
};

export const TableRowSkeletonPropsTable: FC = () => {
    const props = [
        {
            name: 'columns',
            type: 'number (integer)',
            description: 'The number of columns to simulate.',
            defaultValue: '0'
        },
        {
            name: 'animated',
            type: 'boolean',
            description: 'Controls wether the Skeleton animation should play.',
            defaultValue: 'undefined'
        }
    ];
    return <PropsTable props={props} />;
};
