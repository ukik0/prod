import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nTesting from '@/shared/config/i18n/i18nTesting';

interface renderComponentProps {
    component: ReactNode
    path?: string
}

export const renderComponent = ({ component, path = '/' }: renderComponentProps) => {
    return (
        render(
            <MemoryRouter initialEntries={[path]}>
                <I18nextProvider i18n={i18nTesting}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>,
        )
    );
};
