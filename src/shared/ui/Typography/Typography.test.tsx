import { render, screen } from '@testing-library/react';

import { Typography } from '@/shared/ui/Typography/Typography';

describe('Typography', () => {
    test('Should be in the document', () => {
        render(<Typography variant="title-1">Test</Typography>);

        expect(screen.getByTestId('Typography')).toBeInTheDocument();
    });
    test('Should be have variant class', () => {
        render(<Typography variant="title-1">Test</Typography>);

        expect(screen.getByTestId('Typography')).toHaveClass('title-1');
    });
    test('Should be div without tag', () => {
        render(<Typography variant="title-1">Test</Typography>);

        expect(screen.getByTestId('Typography')).toContainHTML('div');
    });
    test('Should be equal tag', () => {
        render(<Typography variant="title-1" tag="a">Test</Typography>);

        expect(screen.getByTestId('Typography')).toContainHTML('a');
    });
});
