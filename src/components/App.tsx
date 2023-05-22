import './index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageLazy} from "../pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "../pages/AboutPage/AboutPage.lazy";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
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
        </div>
    )
}

export default App