import { render, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { Tag } from './Tag';

describe('Tag', () => {
    it('renders and can be dismissed', () => {
        const onDismiss = jest.fn();
        const { getByTestId } = render(<Tag onDismiss={onDismiss}>Lorem</Tag>);

        fireEvent.click(getByTestId('dismiss-icon'));

        expect(onDismiss).toBeCalledTimes(1);
    });

    it('renders and can not be dismissed when dismissible is set to false', () => {
        const onDismiss = jest.fn();
        const { queryByTestId } = render(
            <Tag onDismiss={onDismiss} dismissible={false}>
                Lorem
            </Tag>
        );

        expect(queryByTestId('dismiss-icon')).toBeNull();
    });
});
