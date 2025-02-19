import { Spaces, TextButton, TextButtonProps } from '@freenow/wave';
import { styled } from 'styled-components';

export const NavigationLink: React.FC<TextButtonProps & { active: boolean }> = styled(TextButton)<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;

    padding: ${Spaces[2]};
    padding-left: ${({ active }) => (active ? '20px' : Spaces[3])};

    font-size: 14px;
    font-weight: normal;
    text-decoration: none;

    ${props =>
        props.active &&
        `
            border-left: 4px solid var(--wave-b-color-blue-secondary-900);
        `}

    :hover :first-of-type {
        text-decoration: none;
        color: var(--wave-b-color-blue-secondary-900);
    }
`;
