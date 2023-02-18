import { lazy } from "react";

export const DetailsPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => resolve(import("./DetailsPage")), 1500);
    })
);
