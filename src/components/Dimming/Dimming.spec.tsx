import * as React from 'react';
import { render } from '@testing-library/react';

import { Dimming } from './Dimming';

describe('Dimming', () => {
    it('renders a div tag', () => {
        expect(render(<Dimming />)).toMatchHtmlTag('div');
    });
});
