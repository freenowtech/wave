import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner as BannerWave, Button } from '../..';

const Banner = styled(BannerWave)`
    position: initial;
    transition: none;
`;

const description = `
Banner is a strong visual pattern that is used to display an important information or state which remains until the cause is resolved or the banner is dismissed by the user.

- Banner can include any kind of content, i.e. icons, links, copy
- Banner should be dismissible
- Banner **info** and **success** appear at the bottom of the screen (sticky)
- Banner **error** appears at the top of the screen (sticky)
- Banner appears and disappears via slide in/out animation combined with soft fade and smooth easing

To properly hide the banner with the correct animation, it is recommended to call the dismiss function that can be used when providing a function as the child. This will also unmount the component once the animation is completed.

If you need the banner to be placed top or bottom without depending on the variant make sure to align with the design team and bear in mind that you can use the **position** prop for it.
`;

export default {
    title: 'Components/Banner',
    component: Banner,
    parameters: {
        docs: {
            description: {
                component: description
            }
        }
    },
    argTypes: {
        onClose: { table: { disable: true } },
        children: {
            description: 'Children elements can be a ReactNode or a render prop that provides a dismiss method',
            control: { type: 'none' }
        }
    }
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = args => <Banner {...args} />;

export const Info = Template.bind({});
Info.args = {
    variant: 'info',
    children: (
        <>
            In order to continuously improve our websites, and show offers and advertisements that are suited to you, we
            use cookies, tracking and (re-)targeting technologies. Please see our Cookie policy for more information.
            Tracking and (re-)targeting technologies will only be used if you click on Agree.
        </>
    )
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Booking radius updated'
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Something went wrong :('
};

export const Dismiss = Template.bind({});
const code = `
<Banner>
    {dismiss => <Button onClick={dismiss}>Close</Button>}
</Banner>
`;
Dismiss.args = {
    variant: 'info',
    children: dismiss => <Button onClick={dismiss}>Close</Button>
};
Dismiss.parameters = {
    docs: {
        source: { code, language: 'javascript', type: 'auto' }
    }
};
