import { StoryObj, Meta } from '@storybook/react';

import { Link } from '../Link';

const meta: Meta = {
    title: 'Components/Link',
    component: Link,
    argTypes: {
        children: {
            description: 'Content of the link',
            table: {
                type: {
                    summary: 'ReactNode'
                }
            }
        },
        fontSize: {
            options: [0, 1, 2, 3, 4],
            defaultValue: 2,
            control: 'select',
            description: 'Font size of the link',
            table: {
                type: {
                    summary: 'number | string'
                }
            }
        },
        target: {
            description:
                'Target of the link, see [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)',
            table: {
                type: {
                    summary: '_self | _blank | _parent | _top'
                }
            }
        },
        href: {
            description:
                'Href of the link, see [MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes)',
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        as: {
            description: 'What html-tag to use',
            table: {
                defaultValue: {
                    summary: 'a'
                },
                type: {
                    summary: 'string | ReactComponent'
                }
            }
        },
        ref: {
            description: 'Reference to the DOM element'
        },
        theme: {
            table: {
                disable: true
            }
        },
        forwardedAs: {
            table: {
                disable: true
            }
        }
    },
    args: {
        href: 'https://free-now.com/',
        target: '_blank',
        children: 'Go to FreeNow website'
    }
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const WithManualFontSize: Story = {
    args: {
        fontSize: 1
    }
};