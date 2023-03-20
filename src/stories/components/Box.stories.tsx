import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../..';

const description1 =
    'This component serves as a wrapper component for most layout related needs. Use Box to set values such as `display`, `width`, `height`, and more. In practice, this component is used frequently as a wrapper around other components to achieve Box Model related styling.';

const description2 =
    'The Box supports `space`, `layout`, `position`, `color`, `flexbox`, `grid-layout` and `background` [styled-system](https://styled-system.com/table) props.';

const Example = () => (
    <>
        Box can be used to create both{' '}
        <Box as="span" bg="#9ED9BB">
            inline
        </Box>{' '}
        and
        <Box bg="#9FC5F1">block-level elements,</Box>
        <Box bg="#FF9CFC" width={[1, 1, 1 / 2]}>
            elements with fixed or responsive width and height,
        </Box>
        <Box bg="#FFEB9C" p={4} mt={2}>
            and more!
        </Box>
    </>
);

const code = `
Box can be used to create both
<Box as="span" bg="#9ED9BB">inline</Box>
and
<Box bg="#9FC5F1">block-level elements,</Box>
<Box bg="#FF9CFC" width={[1, 1, 1 / 2]}>elements with fixed or responsive width and height,</Box>
<Box bg="#FFEB9C" p={4} mt={2}>and more!</Box>
`;

export default {
    title: 'Components/Box',
    component: Example,
    parameters: {
        docs: {
            description: {
                component: `${description1}\n\n${description2}`
            }
        }
    },
    argTypes: {}
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = () => <Example />;

export const Default = Template.bind({});
Default.parameters = {
    docs: {
        source: { code, language: 'jsx', type: 'auto' }
    }
};
