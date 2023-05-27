import { screen, fireEvent } from '@testing-library/react';

import { renderComponent } from '@/shared/lib/tests/renderComponent';

import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('should be in the document', () => {
        renderComponent({ component: <SideBar /> });
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });
    test('toggle Sidebar', () => {
        renderComponent({ component: <SideBar /> });
        const toggleButton = screen.getByTestId('toggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
