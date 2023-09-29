import React, { FC, MouseEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { margin, MarginProps, variant } from 'styled-system';

import { theme } from '../../essentials/theme';
import { CloseIcon } from '../../icons';
import { get } from '../../utils/themeGet';
import { getSemanticValue } from '../../utils/cssVariables';
import { Text } from '../Text/Text';

interface TagProps extends MarginProps {
    /**
     * The function to handle when the dismiss icon is clicked
     */
    onDismiss?: (e: MouseEvent) => void;
    /**
     * The prop to determine whether the dismiss functionality is enabled
     */
    dismissible?: boolean;
    /**
     * Set the appropriate semantic tag color.
     * @default default
     */
    variant?: 'default' | 'disabled' | 'error';
}

const TagText = styled(Text).attrs({ theme })<Pick<TagProps, 'dismissible'>>`
    color: ${getSemanticValue('foreground-info-faded')};
    margin-left: 0.75rem;
    margin-right: ${props => (props.dismissible ? '0.25rem' : '0.75rem')};
    font-size: ${get('fontSizes.1')};
    font-weight: ${get('fontWeights.semibold')};
    cursor: default;
    transition: color 125ms ease;
`;

const DismissIcon = styled(CloseIcon).attrs({ size: 18 })`
    margin-right: 0.5rem;
    transition: color 125ms ease;

    &:hover {
        cursor: pointer;
    }
`;

const tagVariant = variant({
    variants: {
        default: {
            backgroundColor: getSemanticValue('background-element-info-default'),
            borderColor: getSemanticValue('border-info-default'),

            [`> ${TagText}`]: {
                color: get('semanticColors.text.link')
            },

            [`> ${DismissIcon}`]: {
                color: get('semanticColors.icon.action')
            },

            '&:hover': {
                backgroundColor: getSemanticValue('background-element-info-emphasized'),
                borderColor: get('semanticColors.border.infoEmphasized'),

                [`> ${TagText}`]: {
                    color: getSemanticValue('foreground-on-background-info')
                },

                [`> ${DismissIcon}`]: {
                    color: getSemanticValue('foreground-on-background-info')
                }
            }
        },
        disabled: {
            borderColor: get('semanticColors.border.primary'),

            [`> ${TagText}`]: {
                color: get('semanticColors.text.disabled')
            },

            [`> ${DismissIcon}`]: {
                color: get('semanticColors.icon.disabled')
            }
        },
        error: {
            backgroundColor: get('semanticColors.background.danger'),
            borderColor: get('semanticColors.border.dangerEmphasized'),

            [`> ${TagText}`]: {
                color: get('semanticColors.text.dangerInverted')
            },

            [`> ${DismissIcon}`]: {
                color: get('semanticColors.icon.danger')
            },

            '&:hover': {
                backgroundColor: get('semanticColors.background.dangerEmphasized'),
                borderColor: get('semanticColors.border.dangerEmphasized'),

                [`> ${TagText}`]: {
                    color: get('semanticColors.text.primaryInverted')
                },

                [`> ${DismissIcon}`]: {
                    color: get('semanticColors.icon.primaryInverted')
                }
            }
        }
    }
});

const TagWrapper = styled.div.attrs({ theme })<TagProps>`
    box-sizing: border-box;
    border: solid 0.0625rem;
    display: inline-flex;
    align-items: center;
    border-radius: 2rem;
    height: 2rem;
    margin-right: 0.25rem;
    margin-bottom: 0.375rem;
    padding: 0.375rem 0;
    transition: background-color 125ms ease;

    ${margin}
    ${tagVariant}
`;

const Tag: FC<PropsWithChildren<TagProps>> = ({
    children,
    onDismiss,
    dismissible = true,
    variant: variantValue = 'default',
    ...rest
}) => (
    <TagWrapper variant={variantValue} {...rest}>
        <TagText dismissible={dismissible}>{children}</TagText>
        {dismissible && (
            <DismissIcon
                data-testid="dismiss-icon"
                color={getSemanticValue('foreground-info-faded')}
                onClick={onDismiss}
            />
        )}
    </TagWrapper>
);

export { Tag, TagProps };