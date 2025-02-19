import { Headline, getSemanticValue } from '@freenow/wave'
import { styled } from 'styled-components'

export const DetailsHeadline = styled(Headline).attrs({ as: 'h3', size: 'm' })`
    color: ${getSemanticValue('foreground-neutral-emphasized')};
`