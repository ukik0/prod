import '../styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageLazy} from "../pages/MainPage/MainPage.lazy";
import {AboutPageLazy} from "../pages/AboutPage/AboutPage.lazy";
import {Suspense, useState} from "react";

const App = () => {


    return (
        <div className={`app ${theme}`}>
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