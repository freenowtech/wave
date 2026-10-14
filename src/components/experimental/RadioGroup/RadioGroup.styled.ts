import { RadioGroup as BaseRadioGroup } from 'react-aria-components';
import isPropValid from '@emotion/is-prop-valid';
import { styled } from 'styled-components';

import { themeGet } from '../../../utils/experimental';

export const List = styled.div.withConfig({ shouldForwardProp: isPropValid })`
    display: flex;
    gap: ${themeGet('space.4')};
`;

export const RadioGroup = styled(BaseRadioGroup)`
    &[data-orientation='horizontal'] ${List} {
        flex-direction: row;
    }

    &[data-orientation='vertical'] ${List} {
        flex-direction: column;
    }
`;
