import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { Button as BaseButton, ButtonProps as BaseButtonProps, ButtonRenderProps } from 'react-aria-components';
import { getSemanticValue } from '../../../essentials/experimental/cssVariables';
import { get } from '../../../utils/experimental/themeGet';
import { textStyles } from '../Text/Text';
import { InlineSpinner } from '../InlineSpinner/InlineSpinner';

type Emphasis = 'primary' | 'secondary' | 'textButton';

interface ButtonProps extends BaseButtonProps {
    /**
     * Define style of the button component, defaults to primary
     */
    emphasis?: Emphasis;
    /**
     * Loading state, defaults to false
     */
    isLoading?: boolean;
}

const emphasisStyles = variant<Record<string, unknown>, Emphasis>({
    prop: '$emphasis',
    variants: {
        primary: {
            color: getSemanticValue('on-accent'),
            background: getSemanticValue('accent'),

            '&::before': {
                background: getSemanticValue('on-accent')
            },

            '&[data-disabled]::before': {
                opacity: 0.38
            }
        },
        secondary: {
            color: getSemanticValue('on-surface'),
            background: getSemanticValue('surface-variant'),

            '&::before': {
                background: getSemanticValue('on-surface')
            },

            '&[data-disabled]': {
                opacity: 0.38
            },

            '&[data-disabled]::before': {
                opacity: 0.06
            }
        },
        textButton: {
            color: getSemanticValue('on-surface'),
            background: 'transparent',

            '&::before': {
                background: getSemanticValue('interactive')
            },

            '&[data-disabled]': {
                opacity: 0.38
            },

            '&[data-disabled]::before': {
                opacity: 0.06,
                background: 'transparent'
            }
        }
    }
});

const ButtonStyled = styled(BaseButton)<{ $emphasis: Emphasis }>`
    position: relative;

    border: none;
    outline: none;
    border-radius: ${get('radii.4')};
    padding: 0;

    cursor: pointer;

    &[data-disabled],
    &[data-pending] {
        cursor: not-allowed;
    }

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

    &[data-hovered]::before {
        opacity: 0.16;
    }

    &[data-focused]::before,
    &[data-pressed]::before {
        opacity: 0.24;
    }

    &[data-pending] {
        opacity: 0.38;
    }

    ${textStyles.variants.label1}

    ${emphasisStyles};
`;

const ChildrenContainer = styled.span<{ $isLoading: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${get('space.2')};
    padding: ${get('space.4')} ${get('space.6')};

    opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
    visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
    transition: opacity ease 200ms;
`;

const SpinnerContainer = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
`;

const spinnerColor: Record<Emphasis, string> = {
    primary: getSemanticValue('on-accent'),
    secondary: getSemanticValue('on-surface'),
    textButton: getSemanticValue('on-surface')
};

function Button({ children, emphasis = 'primary', isLoading = false, ...restProps }: ButtonProps): ReactElement {
    const renderContent = (props: ButtonRenderProps & { defaultChildren: ReactNode }) => (
        <>
            <ChildrenContainer $isLoading={isLoading}>
                {typeof children === 'function' ? children(props) : children}
            </ChildrenContainer>
            {isLoading && (
                <SpinnerContainer>
                    <InlineSpinner data-testid="button-spinner" color={spinnerColor[emphasis]} size="medium" />
                </SpinnerContainer>
            )}
        </>
    );

    return (
        <ButtonStyled data-testid="button-container" isPending={isLoading} $emphasis={emphasis} {...restProps}>
            {renderContent}
        </ButtonStyled>
    );
}

export { Button };
