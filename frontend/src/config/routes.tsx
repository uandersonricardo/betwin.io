import React, { lazy } from "react";

const Login = lazy(() => import("../screens/Login"));
const Dashboard = lazy(() => import("../screens/Dashboard"));

type Route = {
  path: string;
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  isProtected: boolean;
};

const routes: Route[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    isProtected: true
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    isProtected: false
  }
];

export default routes;
