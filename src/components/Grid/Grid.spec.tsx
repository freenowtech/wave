import { render } from '@testing-library/react';
import * as React from 'react';
import { Row, Column } from './Grid';

describe('Grid', () => {
    it('renders without props', () => {
        expect(
            render(
                <Row>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                    <Column>Column 3</Column>
                </Row>
            ).container.firstChild
        ).toMatchSnapshot();
    });

    it('renders columns with span', () => {
        expect(
            render(
                <Row>
                    <Column span={4}>Column 1</Column>
                    <Column span={8}>Column 2</Column>
                </Row>
            ).container.firstChild
        ).toMatchSnapshot();
    });

    it('renders columns with offset', () => {
        expect(
            render(
                <Row>
                    <Column>Column 1</Column>
                    <Column offset={10}>Column 2</Column>
                </Row>
            ).container.firstChild
        ).toMatchSnapshot();
    });
});
