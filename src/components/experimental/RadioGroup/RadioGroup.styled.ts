import { RadioGroup as BaseRadioGroup } from 'react-aria-components';
import styled from 'styled-components';

import { themeGet } from '../../../utils/experimental';

export const List = styled.div`
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
