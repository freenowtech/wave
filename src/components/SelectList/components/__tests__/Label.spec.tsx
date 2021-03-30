import React from 'react';
import { render } from '@testing-library/react';

import { Label } from '../Label';
import { Colors } from '../../../../essentials/Colors/Colors';

describe('Label', () => {
    it('renders small boxed label', () => {
        const { container } = render(
            <Label size="small" variant="boxed">
                Label
            </Label>
        );

        expect(container).toMatchSnapshot();
    });

    it('renders medium boxed label', () => {
        const { container } = render(
            <Label size="medium" variant="boxed">
                Label
            </Label>
        );

        expect(container).toMatchSnapshot();
    });

    it('renders small bottom-lined label', () => {
        const { container } = render(
            <Label size="small" variant="bottom-lined">
                Label
            </Label>
        );

        expect(container).toMatchSnapshot();
    });

    it('renders medium bottom-lined label', () => {
        const { container } = render(
            <Label size="medium" variant="bottom-lined">
                Label
            </Label>
        );

        expect(container).toMatchSnapshot();
    });

    it('renders error label', () => {
        const { container } = render(
            <Label size="medium" variant="boxed" error>
                Label
            </Label>
        );

        expect(container.firstChild).toHaveStyleRule('color', Colors.NEGATIVE_ORANGE_900);
    });

    it('renders disabled label', () => {
        const { container } = render(
            <Label size="medium" variant="boxed" isDisabled>
                Label
            </Label>
        );

        expect(container.firstChild).toHaveStyleRule('color', Colors.AUTHENTIC_BLUE_200);
    });

    it('renders disabled inverted label', () => {
        const { container } = render(
            <Label size="medium" variant="boxed" inverted isDisabled>
                Label
            </Label>
        );

        expect(container.firstChild).toHaveStyleRule('color', Colors.AUTHENTIC_BLUE_550);
    });

    it('renders inverted label', () => {
        const { container } = render(
            <Label size="medium" variant="boxed" inverted>
                Label
            </Label>
        );

        expect(container.firstChild).toHaveStyleRule('color', Colors.AUTHENTIC_BLUE_200);

        expect(container.firstChild).toHaveStyleRule('background', Colors.AUTHENTIC_BLUE_900);
    });
});
