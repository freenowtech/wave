import React, { ReactElement } from 'react';
import { ListBox, ListBoxItem as BaseListBoxItem, ListBoxItemProps } from 'react-aria-components';
import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { Text, TextProps } from '../Text/Text';
import { getSemanticValue } from '../../../essentials/experimental';

const StyledListBoxItem = styled(BaseListBoxItem as React.ComponentType<ListBoxItemProps>)`
    position: relative;
    display: block;
    padding: ${get('space.3')} ${get('space.4')};
    border-radius: ${get('radii.4')};
    color: ${getSemanticValue('on-surface')};

    cursor: pointer;

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &[data-focused] {
        outline: 0;
    }

    &[data-focus-visible] {
        outline: ${getSemanticValue('interactive')} solid 0.125rem;
        outline-offset: -0.125rem;
    }

    &[data-selected] {
        color: ${getSemanticValue('on-interactive-container')};
        background: ${getSemanticValue('interactive-container')};
    }

    &[data-hovered]::before {
        opacity: 0.08;
        background-color: currentColor;
    }

    &[data-disabled] {
        opacity: 0.38;
        cursor: default;
    }
`;

function LabelText(props: TextProps): ReactElement {
    return <Text slot="label" variant="title2" as="div" {...props} />;
}

function DescriptionText(props: TextProps): ReactElement {
    return <Text slot="description" variant="body2" as="div" {...props} />;
}

function ListBoxItem(props: ListBoxItemProps): ReactElement {
    if (typeof props.children === 'string') {
        return (
            <StyledListBoxItem textValue={props.children} {...props}>
                <LabelText>{props.children}</LabelText>
            </StyledListBoxItem>
        );
    }

    return <StyledListBoxItem {...props}>{props.children}</StyledListBoxItem>;
}

export { ListBox, ListBoxItem, LabelText, DescriptionText };
