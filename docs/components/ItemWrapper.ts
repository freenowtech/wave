import styled from 'styled-components';
import { compose, margin, MarginProps, padding, PaddingProps } from 'styled-system';
import { Spaces } from '../../src/essentials';
import { getSemanticValue } from '../../src/utils/cssVariables';

type ItemWrapperProps = PaddingProps &
    MarginProps & {
        inverted?: boolean;
        gridTemplate: string;
    };

const ItemWrapper = styled.div<ItemWrapperProps>`
    align-items: end;
    padding: ${Spaces[2]} ${Spaces[4]};
    margin-left: -${Spaces[4]};
    margin-right: -${Spaces[4]};
    display: grid;
    grid-template-columns: ${p => (p.gridTemplate ? p.gridTemplate : '1fr')};
    grid-row-gap: ${Spaces[3]};
    grid-column-gap: ${Spaces[2]};
    background-color: ${p => getSemanticValue(p.inverted ? 'background-primary-inverted' : 'background-primary-default')};

    ${compose(padding, margin)}
`;

export { ItemWrapper };
