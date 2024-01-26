import { Spaces, Text, getSemanticValue } from '@freenow/wave'
import styled from 'styled-components'

export const DropdownList = styled.div`
    position: absolute;
    background: ${getSemanticValue('TODO')};
    overflow-y: auto;
    z-index: 5;
    top: 72px;
    left: 0;
    padding: ${Spaces[1]} 0;
    width: 100%;
    border-radius: 4px;
    cursor: auto;
`

export const DropdownItem = styled(Text).attrs({ as: 'p' })<{ active?: boolean }>`
    cursor: pointer;
    padding: 10px 12px;
    background-color: ${props =>
        props.active ? getSemanticValue('TODO') : getSemanticValue('TODO')};
    color: ${getSemanticValue('foreground-primary')};

    &:hover {
        background-color: ${getSemanticValue('TODO')};
        color: ${getSemanticValue('foreground-neutral-emphasized')};
    }
`
