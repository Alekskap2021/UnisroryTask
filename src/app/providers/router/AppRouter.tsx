import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../configs/router/routeConfig";

// Мап по объекту, чтобы вытащить и отрисовать все роуты с конфига
// Suspense`у можно скормить какую-нибудь имплементацию спиннера/скелетона

export const AppRouter = () => (
  <Suspense fallback="Loading...">
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
    </Routes>
  </Suspense>
);
