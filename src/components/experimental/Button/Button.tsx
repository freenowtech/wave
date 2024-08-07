import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button as BaseButton } from '../../Button/Button';
import { theme as experimentalTheme, theme } from '../../../essentials/experimental/theme';
import { get } from '../../../utils/experimental/themeGet';

const ButtonStyled = styled(BaseButton).attrs({ theme })`
    border-radius: ${get('radii.3')};
    padding: ${get('space.6')} ${get('space.4')};

    // TODO: HOVER
    // TODO: SECONDARY VARIANT
`;

function Button() {
    return (
        <ThemeProvider theme={experimentalTheme}>
            <ButtonStyled />
        </ThemeProvider>
    );
}

export default Button;
export { Button };
