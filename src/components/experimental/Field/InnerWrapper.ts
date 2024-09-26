import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';

export const InnerWrapper = styled.div`
    width: 100%;
    padding-top: ${get('space.4')};

    position: relative;
    overflow: hidden;
`;
