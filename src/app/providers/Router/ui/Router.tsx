import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RequireAuth } from '@/app/providers/Router/ui/require-auth';
import { AppRouteProps, routeConfig } from '@/shared/config/routesConfig/routesConfig';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}><div className="page-wrapper">{route.element}</div></Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth>{element}</RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};
