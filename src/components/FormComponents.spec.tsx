import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { type ReactElement } from 'react';

import { TrashIcon } from '../icons';
import { Checkbox } from './Checkbox/Checkbox';
import { DatepickerRangeInput } from './Datepicker/DatepickerRangeInput';
import { DatepickerSingleInput } from './Datepicker/DatepickerSingleInput';
import { FilePicker } from './FilePicker';
import { HelperText } from './HelperText/HelperText';
import { Input } from './Input/Input';
import { Label } from './Label/Label';
import { MonthRangePicker } from './MonthPicker';
import { Password } from './Password/Password';
import { PhoneInput } from './PhoneInput/PhoneInput';
import { RadioButton } from './RadioButton/RadioButton';
import { Search } from './Search/Search';
import { Select } from './Select/Select';
import { SelectList } from './SelectList/SelectList';
import { Textarea } from './Textarea/Textarea';
import { Toggle } from './Toggle/Toggle';
import {
    Checkbox as ExperimentalCheckbox,
    ComboBox as ExperimentalComboBox,
    DatePicker as ExperimentalDatePicker,
    ListBoxItem,
    RadioButton as ExperimentalRadioButton,
    RadioGroup as ExperimentalRadioGroup,
    Search as ExperimentalSearch,
    Select as ExperimentalSelect,
    TextField as ExperimentalTextField,
    TimeField as ExperimentalTimeField
} from './experimental';

// Every test fails on console errors and warnings (see src/utils/testing.ts), so rendering each form component with its
// styling props set catches props leaking to the DOM ("React does not recognize the `x` prop on a DOM element")

interface FormComponentCase {
    name: string;
    element: ReactElement;
    /** Interaction that renders the parts of the component that are hidden initially, e.g. a popover */
    open?: () => Promise<void>;
}

const options = [
    { label: 'Sales', value: 'sales' },
    { label: 'Marketing', value: 'marketing', error: true }
];
const manyOptions = Array.from({ length: 150 }, (_, index) => ({ label: `Option ${index}`, value: `option-${index}` }));
const items = [
    { id: 1, name: 'Luke Skywalker' },
    { id: 2, name: 'Leia Organa' }
];
const germany = { value: 'DE', label: 'Germany', dialCode: '+49' };

const clickTextbox = async () => {
    await userEvent.click(screen.getAllByRole('textbox')[0]);
};

const cases: FormComponentCase[] = [
    {
        name: 'Input',
        element: (
            <Input
                label="Label"
                placeholder="Placeholder"
                size="small"
                variant="bottom-lined"
                error
                defaultValue="Value"
                className="custom"
                margin="1rem"
                width="10rem"
            />
        )
    },
    { name: 'Input (disabled)', element: <Input label="Label" disabled /> },
    {
        name: 'Password',
        element: (
            <Password
                label="Label"
                placeholder="Placeholder"
                size="small"
                variant="bottom-lined"
                error
                defaultValue="Value"
                margin="1rem"
            />
        )
    },
    {
        name: 'Search',
        element: (
            <Search
                label="Label"
                placeholder="Placeholder"
                size="small"
                value="Res"
                results={[<span key="result">Result</span>]}
                width="10rem"
            />
        )
    },
    {
        name: 'Textarea',
        element: (
            <Textarea
                label="Label"
                placeholder="Placeholder"
                error
                resize="none"
                defaultValue="Value"
                className="custom"
                margin="1rem"
                width="10rem"
                height="5rem"
            />
        )
    },
    {
        name: 'Checkbox',
        element: (
            <Checkbox
                label="Label"
                error
                size="small"
                textVerticalAlign="top"
                indeterminate
                disabled
                className="custom"
                margin="1rem"
            />
        )
    },
    {
        name: 'RadioButton',
        element: <RadioButton label="Label" error textVerticalAlign="top" disabled defaultChecked margin="1rem" />
    },
    { name: 'Toggle', element: <Toggle label="Label" error disabled defaultChecked margin="1rem" /> },
    {
        name: 'Select',
        element: (
            <Select label="Label" variant="bottom-lined" size="small" error disabled margin="1rem" width="10rem">
                <option value="a">A</option>
            </Select>
        )
    },
    {
        name: 'SelectList',
        element: (
            <SelectList
                label="Label"
                size="small"
                variant="bottom-lined"
                error
                isMulti
                isClearable
                options={options}
                value={options}
                menuIsOpen
                margin="1rem"
                width="10rem"
            />
        )
    },
    { name: 'SelectList (disabled)', element: <SelectList label="Label" isDisabled options={options} /> },
    { name: 'SelectList (windowed)', element: <SelectList label="Label" options={manyOptions} menuIsOpen /> },
    {
        name: 'PhoneInput',
        element: (
            <PhoneInput
                label="Phone number"
                placeholder="Placeholder"
                size="small"
                variant="bottom-lined"
                error
                country={germany}
                text="1234"
                margin="1rem"
            />
        ),
        open: async () => {
            await userEvent.click(screen.getByText(germany.dialCode));
        }
    },
    { name: 'PhoneInput (disabled)', element: <PhoneInput label="Phone number" disabled country={germany} /> },
    {
        name: 'DatepickerSingleInput',
        element: <DatepickerSingleInput label="Date" placeholder="Placeholder" error value={new Date(1999, 1, 2)} />,
        open: clickTextbox
    },
    {
        name: 'DatepickerRangeInput',
        element: (
            <DatepickerRangeInput
                label="Dates"
                startPlaceholder="From"
                endPlaceholder="To"
                errorHandler="Invalid date"
                value={{ startDate: new Date(1999, 1, 2), endDate: new Date(1999, 1, 5) }}
                margin="1rem"
                width="20rem"
            />
        ),
        open: clickTextbox
    },
    {
        name: 'MonthRangePicker',
        element: <MonthRangePicker label="Months" placeholder="Placeholder" />,
        open: clickTextbox
    },
    {
        name: 'FilePicker',
        element: <FilePicker name="file" label="File" buttonText="Upload" error alwaysShowActionButton />
    },
    { name: 'Label', element: <Label variant="danger">Label</Label> },
    { name: 'HelperText', element: <HelperText variant="danger">Helper text</HelperText> },
    {
        name: 'experimental TextField',
        element: (
            <ExperimentalTextField
                label="Label"
                placeholder="Placeholder"
                description="Description"
                errorMessage="Error"
                isInvalid
                leadingIcon={<TrashIcon />}
            />
        )
    },
    { name: 'experimental TextField (multiline)', element: <ExperimentalTextField label="Label" multiline /> },
    {
        name: 'experimental Checkbox',
        element: <ExperimentalCheckbox label="Label" isInvalid isIndeterminate isDisabled />
    },
    {
        name: 'experimental RadioGroup',
        element: (
            <ExperimentalRadioGroup label="Label" isInvalid defaultValue="a">
                <ExperimentalRadioButton value="a">A</ExperimentalRadioButton>
            </ExperimentalRadioGroup>
        )
    },
    {
        name: 'experimental Select',
        element: (
            <ExperimentalSelect
                label="Label"
                placeholder="Placeholder"
                description="Description"
                errorMessage="Error"
                isInvalid
                items={items}
            >
                {item => <ListBoxItem>{item.name}</ListBoxItem>}
            </ExperimentalSelect>
        ),
        open: async () => {
            await userEvent.click(screen.getByRole('button'));
        }
    },
    {
        name: 'experimental ComboBox',
        element: (
            <ExperimentalComboBox
                label="Label"
                placeholder="Placeholder"
                description="Description"
                errorMessage="Error"
                isInvalid
                items={items}
            >
                {item => <ListBoxItem>{item.name}</ListBoxItem>}
            </ExperimentalComboBox>
        ),
        open: async () => {
            await userEvent.type(screen.getByRole('combobox'), 'L');
        }
    },
    { name: 'experimental Search', element: <ExperimentalSearch placeholder="Placeholder" /> },
    {
        name: 'experimental DatePicker',
        element: <ExperimentalDatePicker label="Date" description="Description" errorMessage="Error" isInvalid />
    },
    {
        name: 'experimental TimeField',
        element: <ExperimentalTimeField label="Time" description="Description" errorMessage="Error" isInvalid />
    }
];

describe('Form components', () => {
    it.each(cases)('$name renders all its props without React warnings', async ({ element, open }) => {
        const { container } = render(element);
        // let lazily loaded resources (date-fns locales, country flags) finish loading
        await act(async () => {});

        if (open) {
            await open();
            await act(async () => {});
        }

        expect(container.firstChild).toBeInTheDocument();
    });
});
