import { screen, fireEvent } from '@testing-library/react';

import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation';

import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('should be in the document', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
    });
    test('toggle Sidebar', () => {
        renderWithTranslation(<SideBar />);
        const toggleButton = screen.getByTestId('toggle');
        expect(screen.getByTestId('SideBar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('SideBar')).toHaveClass('collapsed');
    });
});
