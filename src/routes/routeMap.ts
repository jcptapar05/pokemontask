import { ComponentType } from "react";

import { Details, Home, ComponentView } from "../pages";

interface RouteType {
 component: ComponentType;
 path: string;
 exact?: boolean;
}

const routeMap: Array<RouteType> = [
 {
  component: Home,
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
