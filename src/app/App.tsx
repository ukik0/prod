import { Suspense } from 'react';

import { AppRouter } from '@/app/providers/Router';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';

const App = () => {
    const { theme } = useTheme();

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
