import { render } from '@testing-library/react';
import * as React from 'react';
import { SemanticColors } from '../../essentials';
import { Box } from './Box';

describe('Box', () => {
    it('renders without any props', () => {
        expect(render(<Box />).container.firstChild).toMatchSnapshot();
    });

    it('respects the "as" prop', () => {
        expect(render(<Box as="span" />)).toMatchHtmlTag('span');
    });

    it('renders padding and margin', () => {
        expect(render(<Box m={2} p={1} />).container.firstChild).toMatchSnapshot();
    });

    it('renders layout', () => {
        expect(render(<Box width="50%" overflowY="auto" />).container.firstChild).toMatchSnapshot();
    });

    it('renders color', () => {
        expect(
            render(<Box backgroundColor={SemanticColors.background.successEmphasized} />).container.firstChild
        ).toMatchSnapshot();
    });

    it('renders flexbox', () => {
        expect(render(<Box alignItems="center" flexDirection="column" />).container.firstChild).toMatchSnapshot();
    });

    it('renders grid layout', () => {
        expect(
            render(<Box gridColumnGap={2} gridTemplateRows="1fr auto 10%" />).container.firstChild
        ).toMatchSnapshot();
    });

    it('accepts props spreading', () => {
        const renderBox = () => {
            const props = { backgroundColor: SemanticColors.background.successEmphasized };
            return <Box {...props} />;
        };
        expect(renderBox).not.toThrow();
    });
});
