import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '@/shared/config/routesConfig/routesConfig';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }, index) => (
            <Route key={index} path={path} element={<Suspense fallback={<PageLoader />}><div className="page-wrapper">{element}</div></Suspense>} />
        ))}
    </Routes>
);
