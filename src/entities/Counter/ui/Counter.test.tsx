import { userEvent } from '@storybook/testing-library';
import { screen } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { Counter } from './Counter';

describe('Counter', () => {
    test('should be render with initial state', () => {
        renderComponent({ component: <Counter />, initialState: { counter: { value: 10 } } });

        expect(screen.getByTestId('Counter')).toHaveTextContent('10');
    });

    test('should be increment state', () => {
        renderComponent({ component: <Counter />, initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('increment'));
        expect(screen.getByTestId('Counter')).toHaveTextContent('11');
    });

    test('should be decrement state', () => {
        renderComponent({ component: <Counter />, initialState: { counter: { value: 10 } } });
        userEvent.click(screen.getByTestId('decrement'));
        expect(screen.getByTestId('Counter')).toHaveTextContent('9');
    });
});
