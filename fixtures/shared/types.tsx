// Type checks only, the app doesn't import this file. The props of Wave components must stay typed: if the published
// package misses a type dependency (e.g. @types/styled-system), the props fall back to `any`, these lines stop
// erroring and `tsc` fails on the unused @ts-expect-error directives. skipLibCheck doesn't hide this.
import { Box, Button, Card, Text } from '@freenow/wave';

// @ts-expect-error -- not a Box prop
export const boxWithUnknownProp = <Box notAWaveProp />;

// @ts-expect-error -- not a Card prop
export const cardWithUnknownProp = <Card notAWaveProp />;

// @ts-expect-error -- not a Button variant
export const buttonWithUnknownVariant = <Button variant="unknown">Button</Button>;

// @ts-expect-error -- not a Text prop
export const textWithUnknownProp = <Text notAWaveProp>Text</Text>;
