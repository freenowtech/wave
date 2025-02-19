import { SemanticColors, Spaces, Text } from '@freenow/wave'
import { styled } from 'styled-components'

export const DropdownList = styled.div`
    position: absolute;
    background: ${SemanticColors.background.primary};
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
        props.active ? SemanticColors.background.infoEmphasized : SemanticColors.background.primary};
    color: ${SemanticColors.text.primary};

    &:hover {
        background-color: ${SemanticColors.background.infoEmphasized};
        color: ${SemanticColors.text.secondary};
    }
`
