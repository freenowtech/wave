import {
    Table as BaseTable,
    TableProps,
    Cell as BaseCell,
    Column as BaseColumn,
    Row as BaseRow,
    TableBody,
    TableHeader
} from 'react-aria-components';
import styled from 'styled-components';
import { get } from '../../../utils/experimental/themeGet';
import { textStyles } from '../Text/Text';
import { getSemanticValue } from '../../../essentials/experimental';

const Table = styled(BaseTable)`
    border-collapse: collapse;
    border-spacing: 0;
    position: relative;
    width: 100%;
    max-height: 100vh;
    background: ${getSemanticValue('surface')};
    color: ${getSemanticValue('on-surface')};
` as typeof BaseTable;

const Cell = styled(BaseCell)`
    box-sizing: border-box;
    padding: 0 ${get('space.3')};
    position: relative;

    > * {
        position: relative;
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        border-radius: inherit;
        opacity: 0;
        transition: opacity ease 200ms;
    }

    &:first-of-type {
        border-radius: ${get('radii.4')} 0 0 ${get('radii.4')};
    }

    &:last-of-type {
        border-radius: 0 ${get('radii.4')} ${get('radii.4')} 0;
    }

    &[data-focused] {
        outline: 0;
    }
` as typeof BaseCell;

/* Z-Index is needed for sticky header cells to be on top of other cells */
const Column = styled(BaseColumn)`
    position: sticky;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
    padding: 0 ${get('space.3')};
    height: 3rem;
    background: ${getSemanticValue('surface')};
    border-bottom: 1px solid ${getSemanticValue('divider')};
    text-align: start;
    white-space: nowrap;
    outline: 0;
    ${textStyles.variants.title2}
` as typeof BaseColumn;

const Row = styled(BaseRow)`
    height: 3rem;
    border-bottom: 1px solid ${getSemanticValue('divider')};
    border-radius: ${get('radii.4')};
    ${textStyles.variants.body1}

    &[data-hovered] td::before {
        background: ${getSemanticValue('on-surface')};
        opacity: 0.08;
    }

    &[data-selected] {
        background: ${getSemanticValue('interactive-container')};
    }

    &[data-focused] {
        outline: 0.125rem solid ${getSemanticValue('accent')};
        outline-offset: -0.125rem;
    }
` as typeof BaseRow;

const Skeleton = styled.div`
    height: 1rem;
    border-radius: ${get('radii.2')};
    background: ${getSemanticValue('surface-variant')};
`;

export { Table, TableProps, Cell, Column, Row, TableBody, TableHeader, Skeleton };
