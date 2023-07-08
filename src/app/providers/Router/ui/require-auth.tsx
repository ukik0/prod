import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserData } from '@/entities/user/model/selectors';
import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={RoutePaths.main} state={{ from: location }} replace />
        );
    }

    return children;
};
