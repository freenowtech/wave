import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabList, Tab, TabPanel } from './Tabs';

describe('Experimental: Tabs', () => {
    it('renders tabs and switch between them', async () => {
        const user = userEvent.setup();
        render(
            <Tabs>
                <TabList aria-label="Tabs">
                    <Tab id="T1">Tab 1</Tab>
                    <Tab id="T2">Tab 2</Tab>
                    <Tab id="T3">Tab 3</Tab>
                </TabList>
                <TabPanel id="T1">Content of Tab 1</TabPanel>
                <TabPanel id="T2">Content of Tab 2</TabPanel>
                <TabPanel id="T3">Content of Tab 3</TabPanel>
            </Tabs>
        );

        expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('Content of Tab 1')).toBeInTheDocument();

        await user.click(screen.getByRole('tab', { name: 'Tab 3' }));

        expect(screen.getByRole('tab', { name: 'Tab 3' })).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('Content of Tab 3')).toBeInTheDocument();
        expect(screen.queryByText('Content of Tab 1')).not.toBeInTheDocument();
    });

    it('handles disabled tabs', async () => {
        const user = userEvent.setup();
        render(
            <Tabs>
                <TabList aria-label="Tabs">
                    <Tab id="T1">Tab 1</Tab>
                    <Tab id="T2" isDisabled>
                        Tab 2
                    </Tab>
                </TabList>
                <TabPanel id="T1">Founding.</TabPanel>
                <TabPanel id="T2">Monarchy.</TabPanel>
            </Tabs>
        );

        await user.click(screen.getByRole('tab', { name: 'Tab 2' }));
        expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'false');
    });
});
