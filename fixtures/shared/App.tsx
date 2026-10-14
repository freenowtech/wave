import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import {
    Accordion,
    Banner,
    Box,
    Button,
    Card,
    Checkbox,
    DatePicker,
    DateRangePicker,
    Headline,
    HelperText,
    InlineSpinner,
    Input,
    Label,
    Link,
    Logo,
    ModernColors,
    Pagination,
    Password,
    PhoneInput,
    RadioButton,
    Search,
    Select,
    SelectList,
    Tag,
    Text,
    Textarea,
    Toggle,
    Tooltip,
    getSemanticValue
} from '@freenow/wave';
import {
    Button as ExperimentalButton,
    Checkbox as ExperimentalCheckbox,
    ComboBox,
    ListBoxItem,
    TextField
} from '@freenow/wave/experimental';

// Consumers extend Wave components with their own styled-components
const Highlighted = styled(Text)`
    color: ${getSemanticValue('foreground-accent-default')};
`;

const teams = [
    { label: 'Sales', value: 'sales' },
    { label: 'Marketing', value: 'marketing' }
];
const characters = [
    { id: 1, name: 'Luke Skywalker' },
    { id: 2, name: 'Leia Organa' }
];

export const App = () => {
    const toggleRef = useRef<HTMLInputElement>(null);
    const [date, setDate] = useState<Date | undefined>(new Date(2026, 0, 1));

    return (
        <>
            <ModernColors />
            <Card level={200} p={2}>
                <Headline as="h2">Welcome</Headline>
                <Text>FREE NOW Design System</Text>
                <Highlighted fontWeight="semibold">Extended with styled()</Highlighted>
                <Logo />
            </Card>
            <Box display="flex" flexDirection="column" p={2}>
                <Banner variant="info">
                    <Text>Banner</Text>
                </Banner>
                <Accordion heading="Accordion" description="Description" defaultExpanded>
                    <Text>Accordion content</Text>
                </Accordion>
                <Button variant="secondary" size="small" onClick={() => setDate(undefined)}>
                    Reset date
                </Button>
                <Link href="#top">Link</Link>
                <Tag>Tag</Tag>
                <Label variant="success">Label</Label>
                <InlineSpinner size="small" />
                <Input label="Name" size="small" variant="bottom-lined" error width="20rem" />
                <Password label="Password" />
                <Search placeholder="Search" />
                <Textarea label="Comment" resize="vertical" />
                <HelperText variant="danger">Helper text</HelperText>
                <Checkbox label="Accept terms" textVerticalAlign="top" indeterminate />
                <RadioButton label="Option" name="option" />
                <Toggle ref={toggleRef} label="Notifications" />
                <Select label="Fruit" variant="bottom-lined">
                    <option value="apple">Apple</option>
                </Select>
                <SelectList label="Team" options={teams} isMulti />
                <PhoneInput label="Phone number" country={{ value: 'DE', label: 'Germany', dialCode: '+49' }} />
                <DatePicker label="Date" value={date} onChange={setDate} />
                <DateRangePicker label="Dates" />
                <Pagination value={1} pageSize={20} totalItems={200} />
                <Tooltip content="Tooltip content" placement="top">
                    <Text>Hover me</Text>
                </Tooltip>
                <ExperimentalButton emphasis="primary">Experimental button</ExperimentalButton>
                <ExperimentalCheckbox label="Experimental checkbox" />
                <TextField label="Experimental text field" description="Description" />
                <ComboBox label="Character" items={characters}>
                    {item => <ListBoxItem>{item.name}</ListBoxItem>}
                </ComboBox>
            </Box>
        </>
    );
};

/** Text the server-rendered HTML must contain */
export const EXPECTED_TEXT = ['FREE NOW Design System', 'Extended with styled()', 'Notifications', 'Phone number'];
