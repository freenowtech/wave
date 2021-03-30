import { render } from '@testing-library/react';
import React from 'react';
import { TabBar } from './TabBar';

describe('TabBar.Link', () => {
    it('renders with default props', () => {
        expect(render(<TabBar.Link href="#">Hello there</TabBar.Link>).container.firstChild).toMatchSnapshot();
    });

    it('has a bright color if selected', () => {
        expect(
            render(
                <TabBar.Link href="#" selected>
                    General macaroni
                </TabBar.Link>
            ).container.firstChild
        ).toMatchSnapshot();
    });
});
