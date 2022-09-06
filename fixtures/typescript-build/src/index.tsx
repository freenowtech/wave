// tslint:disable: no-empty
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import {
    Accordion,
    Banner,
    Button,
    TextButton,
    Card,
    Checkbox,
    DatePicker,
    DateRangePicker,
    Dimming,
    Headline,
    HelperText,
    InlineSpinner,
    Colors,
    Input,
    Label,
    Link,
    Logo,
    Modal,
    Pagination,
    PhoneInput,
    RadioButton,
    Select,
    TabBar,
    Tag,
    Text,
    Textarea,
    Toggle,
    Tooltip
} from '@freenow/wave';

const voidFunction: () => void = () => {
    /* void */
};

const TestAccordion: React.FC = () => (
    <>
        <Accordion>Hello</Accordion>
        <Accordion defaultExpanded>opened</Accordion>
        <Accordion variant="compact">Compact</Accordion>
        <Accordion onCollapse={voidFunction} onExpand={voidFunction}>
            with callbacks
        </Accordion>
        <Accordion heading="some header" description="Description" buttonLabel="Button" info="Secondary info">
            <div>This is just a placeholder</div>
        </Accordion>
    </>
);

const TestBanner: React.FC = () => (
    <>
        <Banner />
        <Banner position="bottom" />
        <Banner position="top" />
        <Banner variant="info" />
        <Banner variant="success" />
        <Banner variant="danger" />
        <Banner>Test</Banner>
        <Banner>{(dismiss: typeof voidFunction) => <button onClick={dismiss}>Dismiss</button>}</Banner>
        <Banner onClose={voidFunction} />
    </>
);

const TestButton: React.FC = () => (
    <>
        <Button />
        <Button>Text as child</Button>
        <Button>
            <span>Component as child</span>
        </Button>
        <Button inverted />
        <Button inverted={false} />
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button size="small" />
        <Button size="medium" />
        <Button block />
        <Button block={false} />
        <Button onClick={voidFunction} />
    </>
);

const TestTextButton: React.FC = () => (
    <>
        <TextButton />
        <TextButton>Text as child</TextButton>
        <TextButton>
            <span>Component as child</span>
        </TextButton>
        <TextButton inverted />
        <TextButton inverted={false} />
        <TextButton variant="default" />
        <TextButton variant="danger" />
        <TextButton size="small" />
        <TextButton size="medium" />
        <TextButton block />
        <TextButton block={false} />
        <TextButton onClick={voidFunction} />
    </>
);

const TestCard: React.FC = () => (
    <>
        <Card />
        <Card>With children</Card>
        <Card level={0} />
        <Card level={100} />
        <Card level={200} />
        <Card level={300} />
        <Card borderRadius={1} />
        <Card height={1} />
        <Card width={1} />
        <Card margin={1} />
        <Card padding={1} />
    </>
);

const TestCheckbox: React.FC = () => (
    <>
        <Checkbox />
        <Checkbox label="label" />
        <Checkbox label={<span>label</span>} />
        <Checkbox error />
        <Checkbox error={false} />
        <Checkbox className="test" />
        <Checkbox value="value" />
        <Checkbox onChange={voidFunction} />
        <Checkbox margin={1} />
    </>
);

const TestDatePicker: React.FC = () => (
    <>
        <DatePicker />
        <DatePicker margin={1} />
        <DatePicker width={1} />
        <DatePicker placeholder="test" />
        <DatePicker label="test" />
        <DatePicker onClose={voidFunction} />
        <DatePicker onChange={(date?: Date) => {}} />
        <DatePicker minDate={new Date()} />
        <DatePicker maxDate={new Date()} />
        <DatePicker firstDayOfWeek={0} />
        <DatePicker isDateBlocked={(date: Date) => false} />
        <DatePicker displayFormat="dd/MM/yyyy" />
        <DatePicker value={new Date()} />
    </>
);

const TestDateRangePicker: React.FC = () => (
    <>
        <DateRangePicker />
        <DateRangePicker margin={1} />
        <DateRangePicker width={1} />
        <DateRangePicker startPlaceholder="test" />
        <DateRangePicker endPlaceholder="test" />
        <DateRangePicker label="test" />
        <DateRangePicker onClose={voidFunction} />
        <DateRangePicker value={{ startDate: new Date(), endDate: new Date() }} />
        <DateRangePicker onChange={({ startDate, endDate }: { startDate?: Date; endDate?: Date }) => {}} />
        <DateRangePicker minDate={new Date()} />
        <DateRangePicker maxDate={new Date()} />
        <DateRangePicker firstDayOfWeek={0} />
        <DateRangePicker isDateBlocked={(date: Date) => false} />
        <DateRangePicker placement="left" />
        <DateRangePicker placement="right" />
        <DateRangePicker placement="center" />
        <DateRangePicker displayFormat="dd/MM/yyyy" />
    </>
);

const TestDimming: React.FC = () => (
    <>
        <Dimming />
        <Dimming className="test" />
    </>
);

const TestHeadline: React.FC = () => (
    <>
        <Headline />
        <Headline>Text</Headline>
        <Headline as="h1" />
        <Headline as="h2" />
        <Headline as="h3" />
        <Headline as="h4" />
        <Headline as="h5" />
        <Headline as="h6" />
        <Headline inverted />
        <Headline inverted={false} />
        <Headline margin={1} />
        <Headline textAlign="center" />
        <Headline className="test" />
    </>
);

const TestHelperText: React.FC = () => (
    <>
        <HelperText />
        <HelperText>Text</HelperText>
        <HelperText variant="info" />
        <HelperText variant="danger" />
        <HelperText inverted />
        <HelperText inverted={false} />
        <HelperText weak />
        <HelperText weak={false} />
        <HelperText margin={1} />
        <HelperText fontSize={1} />
        <HelperText textAlign="center" />
        <HelperText fontWeight="normal" />
        <HelperText fontWeight="semibold" />
        <HelperText fontWeight="bold" />
    </>
);

const TestInlineSpinner: React.FC = () => (
    <>
        <InlineSpinner />
        <InlineSpinner color="#fff" />
        <InlineSpinner color={Colors.ACTION_BLUE_900} />
        <InlineSpinner size="small" />
        <InlineSpinner size="medium" />
        <InlineSpinner margin={1} />
    </>
);

const TestInput: React.FC = () => (
    <>
        <Input />
        <Input variant="bottom-lined" />
        <Input variant="boxed" />
        <Input size="small" />
        <Input size="medium" />
        <Input inverted />
        <Input inverted={false} />
        <Input label="test" />
        <Input placeholder="test" />
        <Input error />
        <Input error={false} />
        <Input className="test" />
        <Input margin={1} />
        <Input width={1} />
    </>
);

const TestLabel: React.FC = () => (
    <>
        <Label />
        <Label>Text</Label>
        <Label variant="info" />
        <Label variant="success" />
        <Label variant="danger" />
        <Label margin={1} />
    </>
);

const TestLink: React.FC = () => (
    <>
        <Link />
        <Link margin={1} />
        <Link fontSize={1} />
        <Link textAlign="center" />
        <Link inverted />
        <Link inverted={false} />
        <Link href="/test" />
    </>
);

const TestLogo: React.FC = () => (
    <>
        <Logo />
        <Logo variant="default" />
        <Logo variant="business" />
        <Logo inverted />
        <Logo inverted={false} />
    </>
);

const TestModal: React.FC = () => (
    <>
        <Modal />
        <Modal width={1} />
        <Modal fullscreen />
        <Modal fullscreen={false} />
        <Modal dismissible />
        <Modal dismissible={false} />
        <Modal onClose={voidFunction} />
        <Modal>Text</Modal>
        <Modal>
            <span>Component with text</span>
        </Modal>
        <Modal>{(dismiss: VoidFunction) => <button onClick={dismiss}>Dismiss</button>}</Modal>
    </>
);

const TestPagination: React.FC = () => (
    <>
        <Pagination value={1} pageSize={20} totalItems={200} />
        <Pagination value={1} pageSize={20} totalItems={200} size="small" />
        <Pagination value={1} pageSize={20} totalItems={200} size="normal" />
        <Pagination value={1} pageSize={20} totalItems={200} label="test" />
        <Pagination value={1} pageSize={20} totalItems={200} label={<span>test</span>} />
        <Pagination value={1} pageSize={20} totalItems={200} ariaLabelFirst="test" />
        <Pagination value={1} pageSize={20} totalItems={200} ariaLabelPrevious="test" />
        <Pagination value={1} pageSize={20} totalItems={200} ariaLabelNext="test" />
        <Pagination value={1} pageSize={20} totalItems={200} ariaLabelLast="test" />
        <Pagination value={1} pageSize={20} totalItems={200} onSkipBackward={voidFunction} />
        <Pagination value={1} pageSize={20} totalItems={200} onPrevPage={voidFunction} />
        <Pagination value={1} pageSize={20} totalItems={200} onNextPage={voidFunction} />
        <Pagination value={1} pageSize={20} totalItems={200} onSkipForward={voidFunction} />
    </>
);

const TestRadioButton: React.FC = () => (
    <>
        <RadioButton />
        <RadioButton className="test" />
        <RadioButton margin={1} />
        <RadioButton value="test" />
        <RadioButton onChange={voidFunction} />
        <RadioButton label="test" />
        <RadioButton label={<span>test</span>} />
        <RadioButton error />
        <RadioButton error={false} />
    </>
);

const TestSelect: React.FC = () => (
    <>
        <Select />
        <Select className="test" />
        <Select variant="bottom-lined" />
        <Select variant="boxed" />
        <Select inverted />
        <Select inverted={false} />
        <Select error />
        <Select error={false} />
        <Select size="small" />
        <Select size="medium" />
        <Select label="test" />
        <Select margin={1} />
        <Select width={1} />
        <Select id="test" />
    </>
);

const TestTabBar: React.FC = () => (
    <>
        <TabBar />
        <TabBar margin={1} />
    </>
);

const TestTabBarLink: React.FC = () => (
    <>
        <TabBar.Link />
        <TabBar.Link selected />
        <TabBar.Link selected={false} />
        <TabBar.Link activeClassName="test" />
        <TabBar.Link as="button" />
        <TabBar.Link as={Link} />
        <TabBar.Link href="/test" />
        <TabBar.Link onClick={voidFunction} />
    </>
);

const TestTag: React.FC = () => (
    <>
        <Tag />
        <Tag>Text</Tag>
        <Tag>
            <span>Component with text</span>
        </Tag>
        <Tag margin={1} />
        <Tag onDismiss={(e: React.MouseEvent) => {}} />
        <Tag dismissible />
        <Tag dismissible={false} />
    </>
);

const TestText: React.FC = () => (
    <>
        <Text />
        <Text>Text</Text>
        <Text fontWeight="normal" />
        <Text fontWeight="semibold" />
        <Text fontWeight="bold" />
        <Text inverted />
        <Text inverted={false} />
        <Text weak />
        <Text weak={false} />
        <Text margin={1} />
        <Text fontSize={1} />
        <Text fontSize="large" />
        <Text textAlign="center" />
    </>
);

const TestTextarea: React.FC = () => (
    <>
        <Textarea />
        <Textarea className="test" />
        <Textarea inverted />
        <Textarea inverted={false} />
        <Textarea label="test" />
        <Textarea placeholder="test" />
        <Textarea error />
        <Textarea error={false} />
        <Textarea className="test" />
        <Textarea margin={1} />
        <Textarea height={1} />
        <Textarea width={1} />
    </>
);

const TestToggle: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
        <>
            <Toggle />
            <Toggle className="test" />
            <Toggle ref={inputRef} />
            <Toggle margin={1} />
            <Toggle value="test" />
            <Toggle onChange={voidFunction} />
            <Toggle label="test" />
            <Toggle label={<span>test</span>} />
            <Toggle error />
            <Toggle error={false} />
        </>
    );
};

const TestTooltip: React.FC = () => (
    <>
        <Tooltip content="test" />
        <Tooltip content="">Test</Tooltip>
        <Tooltip content="">
            <button>Hover me</button>
        </Tooltip>
        <Tooltip content={<span>test</span>} />
        <Tooltip content="" placement="bottom-left" />
        <Tooltip content="" placement="bottom-center" />
        <Tooltip content="" placement="bottom-right" />
        <Tooltip content="" placement="center-right" />
        <Tooltip content="" placement="top-right" />
        <Tooltip content="" placement="top-center" />
        <Tooltip content="" placement="top-left" />
        <Tooltip content="" placement="center-left" />
        <Tooltip content="" inverted />
        <Tooltip content="" inverted={false} />
        <Tooltip content="" alwaysVisible />
        <Tooltip content="" alwaysVisible={false} />
    </>
);

const TestPhoneInput = () => (
    <>
        <PhoneInput />
        <PhoneInput id="hello" />
        <PhoneInput variant="boxed" size="medium" />
        <PhoneInput variant="bottom-lined" size="small" />
        <PhoneInput text="my text" />
        <PhoneInput
            inputProps={{
                onFocus: () => {}
            }}
        />
        <PhoneInput
            selectListProps={{
                onFocus: () => {}
            }}
        />
    </>
);

const App: React.FC = () => (
    <>
        <TestAccordion />
        <TestBanner />
        <TestButton />
        <TestTextButton />
        <TestCard />
        <TestCheckbox />
        <TestDatePicker />
        <TestDateRangePicker />
        <TestDimming />
        <TestHeadline />
        <TestHelperText />
        <TestInlineSpinner />
        <TestInput />
        <TestLabel />
        <TestLink />
        <TestLogo />
        <TestModal />
        <TestPagination />
        <TestRadioButton />
        <TestSelect />
        <TestTabBar />
        <TestTabBarLink />
        <TestTag />
        <TestText />
        <TestTextarea />
        <TestToggle />
        <TestTooltip />
        <TestPhoneInput />
    </>
);

ReactDOM.render(<App />, document.getElementById('app'));
