import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppRouter } from '@/app/providers/Router';
import { userActions } from '@/entities/user';
import { clsx } from '@/shared/lib/helprers/classnames';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.validateSession());
    }, [dispatch]);

    return (
        <div className={clsx({ cls: 'app', additional: [theme] })}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-wrapper">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
