import { render } from '@testing-library/react';
import React from 'react';
import { TabBar } from './TabBar';

describe('TabBar', () => {
    it('renders all items', () => {
        const instance = render(
            <TabBar>
                <TabBar.Link href="episode-4">A new hope</TabBar.Link>
                <TabBar.Link href="episode-5">Empire strikes back</TabBar.Link>
                <TabBar.Link href="episode-6">Return of the Jedi</TabBar.Link>
            </TabBar>
        );
        expect(instance.container.firstElementChild.children).toHaveLength(3);
    });
});
