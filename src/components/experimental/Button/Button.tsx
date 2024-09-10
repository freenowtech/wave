import React, { ReactElement } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as BaseButton } from '../../Button/Button';
import { theme as experimentalTheme } from '../../../essentials/experimental/theme';
import { getSemanticValue, getSemanticHslValue } from '../../../essentials/experimental/cssVariables';
import { get } from '../../../utils/experimental/themeGet';
import { Text } from '../Text/Text';

const ButtonStyled = styled(BaseButton)<{ secondary: boolean }>`
    border-radius: ${get('radii.4')};
    padding: ${experimentalTheme.space[4]}rem ${experimentalTheme.space[6]}rem;
    height: unset;

    background-color: ${getSemanticValue('accent')};

    &:hover {
        background-color: hsla(${getSemanticHslValue('accent')}, 0.84);
    }

    ${props =>
        props.secondary &&
        `
        color: hsl(0, 6%, 11%); /* var(--sys-color-on-surface, #1E1A1A) */
        background-color: hsl(0, 6%, 94%); /* var(--sys-color-surface-container, #F1EFEF) */
        &:hover {
            color: hsl(0, 6%, 11%); /* var(--sys-color-on-surface, #1E1A1A) */
            background-color: hsl(0, 2%, 81%); /* var(--sys-color-on-surface, #1E1A1A) * opacity 0.16 */
        }
    `}
`;

function Button({ secondary, children }: { secondary: boolean; children: React.ReactNode }): ReactElement {
    return (
        <ThemeProvider theme={experimentalTheme}>
            <ButtonStyled secondary={secondary}>
                <Text variant="label1">{children}</Text>
            </ButtonStyled>
        </ThemeProvider>
    );
}

export default Button;
export { Button };
