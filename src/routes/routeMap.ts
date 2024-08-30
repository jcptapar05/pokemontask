import { ComponentType } from "react";

import { Details, HomeView, ComponentView } from "../pages";

interface RouteType {
 component: ComponentType;
 path: string;
 exact?: boolean;
}

const routeMap: Array<RouteType> = [
 {
  component: HomeView,
  path: "/",
  exact: true,
 },
 {
  component: Details,
  path: "/:id",
 },
 {
  component: ComponentView,
  path: "/home/test",
 },
];

export default routeMap;
