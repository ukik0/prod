import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {Suspense, useContext} from "react";
import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {classNames} from "@/shared/lib/helprers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames({cls: 'app', additional: [theme]})}>
            <Link to={'/'}>
                main
            </Link>
            <Link to={'/about'}>
                About
            </Link>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default App