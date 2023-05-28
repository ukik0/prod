import { render, screen } from '@testing-library/react';

import { Button } from '@/shared/ui/Button/index';

describe('Button', () => {
    test('button with children', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('button with theme', () => {
        render(<Button theme="clear">Test</Button>);

        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
