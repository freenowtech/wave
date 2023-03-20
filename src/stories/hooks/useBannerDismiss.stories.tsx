import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Banner as BannerWave, useBannerDismiss } from '../..';

const Banner = styled(BannerWave)`
    position: initial;
    transition: none;
`;

const InsideBanner = () => {
    const dismiss = useBannerDismiss();
    return <Button onClick={dismiss}>Close</Button>;
};

const Example = () => (
    <Banner>
        <InsideBanner />
    </Banner>
);

const code = `
const InsideBanner = () => {
    const dismiss = useBannerDismiss()
    return <Button onClick={dismiss}>Close</Button>
}

const Wrapper = () => (
    <Banner>
        <InsideBanner />
    </Banner>
)
`;

const description =
    'Renders a `button` tag. This module exposes two types of buttons `<TextButton />` and `<Button />`. Take a look to the [MDN web docs - Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to know more about some of the default props supported by a button along with some accessibility concerns. \n\n The purpose of the buttons is to trigger an interaction like order, confirmation or submit. For navigation targets consider a link. Use the primary button only once per screen and avoid putting two primary buttons next to each other. Use the secondary button for less important actions and in multi button scenarios.';

export default {
    title: 'Hooks/useBannerDismiss',
    component: Example,
    parameters: {
        docs: {
            description: {
                component: description
            }
        }
    }
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = () => <Example />;

export const Default = Template.bind({});
Default.storyName = 'useBannerDismiss';
Default.parameters = {
    docs: {
        source: { code, language: 'javascript', type: 'auto' }
    }
};
