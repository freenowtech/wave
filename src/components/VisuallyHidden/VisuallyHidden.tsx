import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';

const VisuallyHidden = styled.div.withConfig({ shouldForwardProp: isPropValid })`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px; /* stylelint-disable-line unit-whitelist */
    width: 1px; /* stylelint-disable-line unit-whitelist */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;

export { VisuallyHidden };
