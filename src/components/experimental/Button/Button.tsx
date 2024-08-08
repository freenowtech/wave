import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as BaseButton } from '../../Button/Button';
import { theme as experimentalTheme } from '../../../essentials/experimental/theme';
import { get } from '../../../utils/experimental/themeGet';
import { Text } from '../Text/Text';

const ButtonStyled = styled(BaseButton)`
    border-radius: ${get('radii.4')};
    padding: ${experimentalTheme.space[4]}rem ${experimentalTheme.space[6]}rem;
    height: unset;

    // TODO: SECONDARY VARIANT
    background-color: hsl(350, 92%, 25%); // var(--sys-color-accent, #790518);
    &:hover {
        background-color: hsl(350, 53%, 36%); // var(--sys-color-accent, #790518) + opacity 0.16
    }
`;

function Button({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={experimentalTheme}>
            <ButtonStyled>
                <Text variant="label1">{children}</Text>
            </ButtonStyled>
        </ThemeProvider>
    );
}

export default Button;
export { Button };
