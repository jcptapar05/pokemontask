import { ComponentType } from "react";

import { DetailsView, HomeView, ComponentView } from "../pages";

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
  component: DetailsView,
  path: "/:id",
 },
 {
  component: ComponentView,
  path: "/home/test",
 },
];

export default routeMap;
