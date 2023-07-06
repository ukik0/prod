import { render, screen } from '@testing-library/react';

import { Button } from '@/shared/ui/Button/Button';

describe('Button', () => {
    test('Button with children', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button with theme', () => {
        render(<Button theme="clear">Test</Button>);

        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
