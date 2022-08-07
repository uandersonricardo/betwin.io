import React, { lazy } from "react";

const Login = lazy(() => import("../screens/Login"));
const Register = lazy(() => import("../screens/Register"));
const Dashboard = lazy(() => import("../screens/Dashboard"));

type Route = {
  path: string;
  name: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  isProtected: boolean;
};

const routes: Route[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    isProtected: true
  },
  {
    path: "login",
    name: "Login",
    component: Login,
    isProtected: false
  },
  {
    path: "register",
    name: "Cadastrar",
    component: Register,
    isProtected: false
  }
];

export default routes;
