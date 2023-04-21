import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PhoneInput } from '../PhoneInput';
import { COUNTRIES } from '../constants';

const meta: Meta = {
    title: 'Form Elements/Phone Input',
    component: PhoneInput,
    argTypes: {
        variant: {
            options: ['boxed', 'bottom-lined'],
            defaultValue: 'boxed',
            control: 'radio'
        },
        size: {
            options: ['small', 'medium'],
            defaultValue: 'medium',
            control: 'radio'
        },
        listPortalTarget: {
            control: false
        }
    },
    args: {
        label: 'Phone Number',
        id: 'phone',
        listPortalTarget: document.body
    }
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
    render: ({ onCountryChange, onTextChange, ...args }) => {
        const [nationalNumber, setNationalNumber] = React.useState('');
        const [country, setCountry] = React.useState(COUNTRIES.find(it => it.value === 'DE'));

        return (
            <PhoneInput
                text={nationalNumber}
                country={country}
                onCountryChange={c => {
                    onCountryChange?.(c);
                    setCountry(c);
                }}
                onTextChange={event => {
                    onTextChange?.(event);
                    setNationalNumber(event.target.value);
                }}
                {...args}
            />
        );
    }
};

export const Preselected: Story = {
    ...Default,
    args: {
        label: undefined,
        country: {
            label: 'ES',
            value: 'ES',
            dialCode: '+34'
        },
        text: '123456789'
    }
};

export const BottomLined: Story = {
    ...Default,
    args: {
        variant: 'bottom-lined'
    }
};

export const Small: Story = {
    ...Default,
    args: {
        size: 'small'
    }
};

export const WithError: Story = {
    ...Default,
    args: {
        error: true
    }
};

export const Disabled: Story = {
    ...Default,
    args: {
        disabled: true
    }
};
