import React, { type ComponentPropsWithoutRef, type ComponentType, type ReactElement } from 'react';
import styled from 'styled-components';
import { MarginProps } from 'styled-system';
import { theme } from '../../../essentials/experimental/theme';
import { get } from '../../../utils/experimental/themeGet';

import { Text } from '../Text/Text';
import PlusIcon from '../../../icons/actions/PlusIcon';
import XCrossCircleIcon from '../../../icons/actions/XCrossCircleIcon';

import type { IconProps } from '../../../icons';

interface ChipProps extends ComponentPropsWithoutRef<'button'>, MarginProps {
    /**
     * The text
     */
    label: string;
    /**
     * Toggle active state
     */
    isActive?: boolean;
    /**
     * Icon to be shown on the start
     */
    Icon?: ComponentType<IconProps>;
    /**
     * Controls if the Chip can be dismissed
     */
    deletable: boolean;
}
//
// const TextLabel = styled.span.attrs({ theme })`
//     font-size: ${get('fontSizes.1')};
//     font-weight: ${get('fontWeights.medium')};
//     line-height: ${get('lineHeights.2')};
// `;

const Container = styled.div.attrs({ theme })<{ isActive: boolean }>`
    display: inline-flex;
    align-items: center;

    cursor: pointer;

    border-radius: ${get('radii.3')};
    padding: ${get('space.2')}rem ${get('space.3')}rem;

    color: ${
        props =>
            props.isActive
                ? 'hsla(343, 70%, 22%, 1)' // --sys-color-on-interactive-container, #5F1127
                : 'hsla(0, 6%, 11%, 1)' // --sys-color-on-surface, #1E1A1A
    };
    background-color: ${
        props =>
            props.isActive
                ? 'hsla(350, 46%, 95%, 1)' // --sys-color-interactive-container
                : 'hsla(0, 6%, 94%, 1)' // --sys-color-surface-container
    };

    &:hover {
        background-color: ${
            props =>
                props.isActive
                    ? 'hsla(343, 70%, 22%, 0.16)' // --sys-color-on-interactive-container, #5F1127
                    : 'hsla(0, 6%, 11%, 0.16)' // --sys-color-on-surface, #1E1A1A;
        };
    }
`;

const Spacer = styled.div.attrs({ theme })`
    display: inline-block;
    margin-right: ${get('space.1')}rem;
`;

function Chip({ label, isActive = false, Icon = PlusIcon, deletable = false }: ChipProps): ReactElement {
    return (
        <Container isActive={isActive}>
            <>
                {Icon && <Icon size={20} />}
                <Spacer />
                <Text variant="label1">{label}</Text>
                <Spacer />
                {deletable && (
                    <XCrossCircleIcon size={20} color={isActive ? 'hsl(343, 70%, 22%)' : 'hsl(0, 6%, 38%)'} />
                )}
            </>
        </Container>
    );
}

export { Chip, ChipProps };
