import { Suspense } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { AppRouter } from '@/app/providers/Router';
import { NavBar } from '@/widgets/NavBar';
import { SideBar } from '@/widgets/SideBar';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={clsx({ cls: 'app', additional: [theme] })}>
            <Suspense fallback="">
                <NavBar />
                asdaaaad
                <div className="content-wrapper">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
