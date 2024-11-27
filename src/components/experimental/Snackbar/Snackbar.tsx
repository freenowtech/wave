import React, { ReactNode, type ReactElement } from 'react';
import styled from 'styled-components';
import { SpaceProps, LayoutProps, PositionProps, FlexboxProps } from 'styled-system';

import { get } from '../../../utils/experimental/themeGet';
import { getSemanticValue } from '../../../essentials/experimental';
import { textStyles } from '../Text/Text';
import { XCrossIcon } from '../../../icons';
import { IconButton } from '../IconButton/IconButton';

const Container = styled.div`
    position: relative;
    justify-content: space-between;

    border: none;
    outline: none;
    border-radius: ${get('radii.4')};
    padding: ${get('space.3')} ${get('space.4')};
    color: ${getSemanticValue('inverse-on-surface')};
    background-color: ${getSemanticValue('inverse-surface')};

    display: inline-flex;
    align-items: center;
    gap: ${get('space.1')};

    ${textStyles.variants.body2}
`;

const DismissButton = styled(IconButton)`
    height: unset;
    width: unset;
    padding: 0;
`;

interface SnackbarProps extends SpaceProps, LayoutProps, PositionProps, FlexboxProps {
    children: ReactNode;
    hasDismissButton?: boolean;
    onDismiss?: () => void;
}

const Snackbar = ({
    children,
    hasDismissButton = false,
    onDismiss = null,
    ...restProps
}: SnackbarProps): ReactElement => (
    <Container {...restProps}>
        {children}
        {hasDismissButton && (
            <DismissButton
                data-testid="snackbar-close-icon"
                Icon={() => <XCrossIcon cursor="pointer" size={24} color={getSemanticValue('inverse-on-surface')} />}
                onPress={onDismiss}
            />
        )}
    </Container>
);

export { Snackbar, SnackbarProps };
