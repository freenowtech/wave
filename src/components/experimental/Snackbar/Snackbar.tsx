import React, { ReactNode, type ReactElement } from 'react';
import styled from 'styled-components';
import { SpaceProps, LayoutProps, PositionProps, FlexboxProps } from 'styled-system';

import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';
import { textStyles } from '../Text/Text';

const Container = styled.div`
    position: relative;
    justify-content: space-between;

    border: none;
    outline: none;
    border-radius: ${get('radii.4')};
    padding: ${get('space.4')} ${get('space.5')};
    color: ${getSemanticValue('inverse-on-surface')};
    background-color: ${getSemanticValue('inverse-surface')};

    display: inline-flex;
    align-items: center;
    gap: ${get('space.1')};

    ${textStyles.variants.body2}
`;

interface SnackbarProps extends SpaceProps, LayoutProps, PositionProps, FlexboxProps {
    children?: ReactNode;
}

const Snackbar = ({ children, ...restProps }: SnackbarProps): ReactElement => (
    <Container {...restProps}>{children}</Container>
);

export { Snackbar, SnackbarProps };
