import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {Suspense, useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";
import {useTheme} from "./utils/hooks/useTheme";
import {classNames} from "./utils/helpers/classNames/classNames";

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
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default App