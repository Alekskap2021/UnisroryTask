import { lazy } from "react";
import { RouteProps } from "react-router-dom";

// Импорт с lazy, чтобы не грузить бандл
const DetailsPage = lazy(() => import("pages/DetailsPage"));
const MainPage = lazy(() => import("pages/MainPage"));

export enum AppRoutes {
  MAIN = "main",
  DETAILS = "details",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.DETAILS]: "/details/:id",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.DETAILS]: {
    path: RoutePath.details,
    element: <DetailsPage />,
  },
};
