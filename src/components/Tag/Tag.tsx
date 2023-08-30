import React, { FC, MouseEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { margin, MarginProps, variant } from 'styled-system';

import { Colors } from '../../essentials';
import { theme } from '../../essentials/theme';
import { CloseIcon } from '../../icons';
import { get } from '../../utils/themeGet';
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
            backgroundColor: get('semanticColors.background.info'),
            borderColor: get('semanticColors.border.infoEmphasized'),

            [`> ${TagText}`]: {
                color: get('semanticColors.text.link')
            },

            [`> ${DismissIcon}`]: {
                color: get('semanticColors.icon.action')
            },

            '&:hover': {
                backgroundColor: get('semanticColors.background.infoEmphasized'),
                borderColor: get('semanticColors.border.infoEmphasized'),

                [`> ${TagText}`]: {
                    color: get('semanticColors.text.primaryInverted')
                },

                [`> ${DismissIcon}`]: {
                    color: get('semanticColors.icon.primaryInverted')
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

const Tag: FC<PropsWithChildren<TagProps>> = ({ children, onDismiss, dismissible, ...rest }) => (
    <TagWrapper {...rest}>
        <TagText dismissible={dismissible}>{children}</TagText>
        {dismissible && <DismissIcon data-testid="dismiss-icon" color={Colors.ACTION_BLUE_900} onClick={onDismiss} />}
    </TagWrapper>
);

Tag.defaultProps = {
    dismissible: true,
    variant: 'default'
};

export { Tag, TagProps };
