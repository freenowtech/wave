import styled from 'styled-components';
import { Spaces } from '../../essentials';

export const GuidelineBlock = styled.div`
    display: flex;
    margin-bottom: ${Spaces[4]};
`;

export const GuidelineImage = styled.div`
    flex: 1;
    margin-right: ${Spaces[4]};
`;

export const GuidelineContent = styled.div`
    flex: 3;
`;

export const GuidelineList = styled.div`
    display: grid;
    grid-row-gap: ${Spaces[2]};
    grid-column-gap: ${Spaces[1]};
    grid-template-columns: 2rem auto;
    grid-template-rows: auto;
`;
