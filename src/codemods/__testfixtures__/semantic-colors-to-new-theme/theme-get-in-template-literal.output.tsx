import { Text, getSemanticValue } from '@freenow/wave'
import { styled } from 'styled-components'

export const TextSizeText = styled(Text)`
    color: ${getSemanticValue('foreground-primary')};
`