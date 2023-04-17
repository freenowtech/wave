import React, { FC, MouseEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { margin, MarginProps } from 'styled-system';

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
}

const TagText = styled(Text).attrs({ theme })<Pick<TagProps, 'dismissible'>>`
    color: ${Colors.ACTION_BLUE_900};
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

const TagWrapper = styled.div.attrs({ theme })<TagProps>`
    box-sizing: border-box;
    background-color: ${Colors.ACTION_BLUE_50};
    border: solid 0.0625rem ${Colors.ACTION_BLUE_900};
    display: inline-flex;
    align-items: center;
    border-radius: 2rem;
    height: 2rem;
    margin-right: 0.25rem;
    margin-bottom: 0.375rem;
    padding: 0.375rem 0;
    transition: background-color 125ms ease;

    ${margin}

    &:hover {
        background-color: ${Colors.ACTION_BLUE_900};

        > ${TagText} {
            color: ${Colors.WHITE};
        }

        > ${DismissIcon} {
            color: ${Colors.WHITE};
        }
    }
`;

const Tag: FC<PropsWithChildren<TagProps>> = ({ children, onDismiss, dismissible = true, ...rest }) => (
    <TagWrapper {...rest}>
        <TagText dismissible={dismissible}>{children}</TagText>
        {dismissible && <DismissIcon data-testid="dismiss-icon" color={Colors.ACTION_BLUE_900} onClick={onDismiss} />}
    </TagWrapper>
);

export { Tag, TagProps };
