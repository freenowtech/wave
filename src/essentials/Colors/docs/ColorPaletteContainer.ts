import styled from 'styled-components';
import { MediaQueries, Spaces } from '../..';

const ColorPaletteContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    align-items: start;
    margin-top: ${Spaces[3]};

    ${MediaQueries.small} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }

    ${MediaQueries.medium} {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1.5rem;
    }

    ${MediaQueries.large} {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

    ${MediaQueries.xlarge} {
        grid-template-columns: repeat(3, minmax(auto, 18.5rem));
        grid-gap: 2rem;
    }
`;

export { ColorPaletteContainer };
