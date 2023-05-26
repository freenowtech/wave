import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TabBar } from '../TabBar';

const TABS = ['A New Hope', 'Empire Strikes Back', 'Return of the Jedi'];

const meta: Meta = {
    title: 'Components/TabBar',
    component: TabBar.Link,
    argTypes: {
        as: {
            control: 'text'
        }
    }
};

export default meta;

type Story = StoryObj<typeof TabBar.Link>;

export const Default: Story = {
    render: args => {
        const [selected, setSelected] = useState<string>();

        return (
            <TabBar>
                {TABS.map(it => (
                    <TabBar.Link
                        key={it}
                        href="#"
                        onClick={e => {
                            e.preventDefault();
                            setSelected(it);
                        }}
                        selected={selected === it}
                        {...args}
                    >
                        {it}
                    </TabBar.Link>
                ))}
            </TabBar>
        );
    }
};
