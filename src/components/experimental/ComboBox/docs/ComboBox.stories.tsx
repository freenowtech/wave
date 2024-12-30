import React, { useRef } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { ComboBox } from '../ComboBox';
import { ListBoxItem } from '../../ListBox/ListBox';
import { Button } from '../../../Button/Button';
import DogIcon from '../../../../icons/basic/DogIcon';

const meta: Meta = {
    title: 'Experimental/Components/ComboBox',
    component: ComboBox,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        Story => (
            <div style={{ width: '590px' }}>
                <Story />
            </div>
        )
    ],
    args: {
        label: 'Animal',
        items: [
            { id: 1, name: 'Aardvark' },
            { id: 2, name: 'Cat' },
            { id: 3, name: 'Dog' },
            { id: 4, name: 'Kangaroo' },
            { id: 5, name: 'Koala' },
            { id: 6, name: 'Penguin' },
            { id: 7, name: 'Snake' },
            { id: 8, name: 'Turtle' },
            { id: 9, name: 'Wombat' }
        ],
        children: item => <ListBoxItem>{item.name}</ListBoxItem>
    }
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {};

export const WithIcon: Story = {
    args: {
        leadingIcon: <DogIcon />
    }
};

export const WithDescription: Story = {
    args: {
        description: 'Enter your favourite animal'
    }
};

export const Disabled: Story = {
    args: {
        isDisabled: true
    }
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
        errorMessage: 'Error'
    }
};

type Character = { name: string };

export const AsyncValues: StoryObj<typeof ComboBox<Character>> = {
    render: () => {
        const [items, setItems] = React.useState<Character[]>([]);
        const [filterText, setFilterText] = React.useState('');

        React.useEffect(() => {
            let ignore = false;

            async function startFetching() {
                const res = await fetch(`https://swapi.py4e.com/api/people/?search=${filterText}`);
                const json = await res.json();

                if (!ignore) {
                    setItems(json.results);
                }
            }

            // eslint-disable-next-line no-void
            void startFetching();

            return () => {
                ignore = true;
            };
        }, [filterText]);

        return (
            <ComboBox<Character>
                label="Star Wars Character"
                items={items}
                inputValue={filterText}
                onInputChange={setFilterText}
            >
                {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
            </ComboBox>
        );
    }
};

export const FullyControlled: Story = {
    render: () => {
        const [items, setItems] = React.useState<Character[]>([]);
        const [filterText, setFilterText] = React.useState('');
        const [key, setKey] = React.useState<string | null>(null);

        React.useEffect(() => {
            let ignore = false;

            async function startFetching() {
                const res = await fetch(`https://swapi.py4e.com/api/people/?search=${filterText}`);
                const json = await res.json();

                if (!ignore) {
                    setItems(json.results);
                }
            }

            // eslint-disable-next-line no-void
            void startFetching();

            return () => {
                ignore = true;
            };
        }, [filterText]);

        return (
            <ComboBox
                label="Star Wars Character"
                items={items}
                inputValue={filterText}
                selectedKey={key}
                onSelectionChange={newKey => {
                    setFilterText(newKey as string);
                    setKey(newKey as string);
                }}
                onInputChange={input => {
                    setFilterText(input);
                    if (input === '') {
                        setKey(null);
                    }
                }}
            >
                {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
            </ComboBox>
        );
    }
};

export const WithRef: StoryObj<typeof ComboBox> = {
    render: () => {
        const [items, setItems] = React.useState<Character[]>([]);
        const [filterText, setFilterText] = React.useState('');
        const comboBoxRef = useRef<HTMLInputElement>(null);

        React.useEffect(() => {
            let ignore = false;

            async function startFetching() {
                const res = await fetch(`https://swapi.py4e.com/api/people/?search=${filterText}`);
                const json = await res.json();

                if (!ignore) {
                    setItems(json.results);
                }
            }

            // eslint-disable-next-line no-void
            void startFetching();

            return () => {
                ignore = true;
            };
        }, [filterText]);

        const handleFocus = () => {
            if (comboBoxRef.current) {
                comboBoxRef.current.focus();
                // eslint-disable-next-line no-console
                console.log('input focused');
            }
        };

        const handleBlur = () => {
            if (comboBoxRef.current) {
                comboBoxRef.current.blur();
                // eslint-disable-next-line no-console
                console.log('input blurred');
            }
        };

        const handleGetValue = () => {
            if (comboBoxRef.current) {
                // eslint-disable-next-line no-console
                console.log('current value:', comboBoxRef.current.value);
            }
        };

        return (
            <div>
                <div style={{ marginTop: '10px', zIndex: -1 }}>
                    <Button onClick={handleFocus} size="small" style={{ marginRight: '5px' }}>
                        Focus
                    </Button>
                    <Button onClick={handleBlur} size="small" style={{ marginRight: '5px' }}>
                        Blur
                    </Button>
                    <Button onClick={handleGetValue} size="small">
                        Get value
                    </Button>
                </div>
                <ComboBox
                    label="Star Wars Character"
                    ref={comboBoxRef}
                    items={items}
                    inputValue={filterText}
                    onInputChange={setFilterText}
                >
                    {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
                </ComboBox>
                {/* Adding this div so the dropdown appears below and doesn't overlap with the buttons */}
                <div style={{ height: '45px' }} />
            </div>
        );
    }
};
