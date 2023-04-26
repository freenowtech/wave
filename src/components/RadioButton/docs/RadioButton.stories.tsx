import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../RadioButton';

const meta: Meta = {
    title: 'Form Elements/RadioButton',
    component: RadioButton,
    argTypes: {
        textVerticalAlign: {
            options: ['top', 'center'],
            defaultValue: 'center',
            control: 'radio'
        }
    },
    args: {
        label: 'First Name'
    }
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: undefined
    }
};

export const WithLabel: Story = {
    args: {}
};

export const Checked: Story = {
    args: {
        checked: true
    }
};

export const WithError: Story = {
    args: {
        error: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithVerticalAlignment: Story = {
    args: {
        label: 'By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. The author accepts no liability whatsoever in respect of the current relevance, accuracy, completeness or quality of the information on this website. The author accepts no liability whatsoever with respect to either material or immaterial losses incurred as a result of the use or non-use of the information presented here or the use of inaccurate or incomplete information unless the author is demonstrably guilty of acts of wilful or gross negligence. All services offered are subject to change and are without obligation. The author specifically reserves the right to change, amplify or delete parts of the pages or the whole of the services offered without prior notification or to cease publication, either temporarily or definitively.',
        textVerticalAlign: 'top'
    }
};
