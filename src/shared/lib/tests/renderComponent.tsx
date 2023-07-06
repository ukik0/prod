import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/Store';
import i18nTesting from '@/shared/config/i18n/i18nTesting';

interface renderComponentProps {
    component: ReactNode
    path?: string
    initialState?: DeepPartial<StateSchema>
}

export const renderComponent = ({ component, path = '/', initialState }: renderComponentProps) => {
    return (
        render(
            <MemoryRouter initialEntries={[path]}>
                <StoreProvider initialState={initialState}>
                    <I18nextProvider i18n={i18nTesting}>
                        {component}
                    </I18nextProvider>
                </StoreProvider>
            </MemoryRouter>,
        )
    );
};
