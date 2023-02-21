import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../configs/router/routeConfig";
import { Preloader } from "shared/ui";

// Мап по объекту, чтобы вытащить и отрисовать все роуты с конфига

export const AppRouter = () => (
  <Suspense fallback={<Preloader />}>
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);
