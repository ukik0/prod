import './styles/index.scss'
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {clsx} from "@/shared/lib/helprers/classNames/classNames";
import {AppRouter} from "@/app/providers/Router";
import {NavBar} from "@/widgets/NavBar";
import {SideBar} from "@/widgets/SideBar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={clsx({cls: 'app', additional: [theme]})}>
            <NavBar/>
            <div className="content-wrapper">
                <SideBar/>
                <AppRouter/>
            </div>
        </div>
    )
}

export default App