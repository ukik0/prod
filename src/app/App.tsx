import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {clsx} from "@/shared/lib/helprers/classNames/classNames";
import {AppRouter} from "@/app/providers/Router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={clsx({cls: 'app', additional: [theme]})}>
            <Link to={'/'}>
                main
            </Link>
            <Link to={'/about'}>
                About
            </Link>

            <AppRouter/>

            <button onClick={toggleTheme}>toggle</button>
        </div>
    )
}

export default App