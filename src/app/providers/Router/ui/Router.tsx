import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "@/shared/config/routesConfig/routesConfig";

export const AppRouter = () => (
    <Suspense fallback={<div>loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route key={path} path={path} element={<div className="page-wrapper">element</div>} />
            ))}
        </Routes>
    </Suspense>
)