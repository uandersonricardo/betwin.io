import React, { lazy } from "react";

const Login = lazy(() => import("../screens/Login"));
const Register = lazy(() => import("../screens/Register"));
const Confirmation = lazy(() => import("../screens/Confirmation"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const Match = lazy(() => import("../screens/Match"));
const Transactions = lazy(() => import("../screens/Transactions"));

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
    path: "match/:id",
    name: "Partida",
    component: Match,
    isProtected: true
  },
  {
    path: "transactions",
    name: "Transações",
    component: Transactions,
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
  },
  {
    path: "confirmation",
    name: "Confirmação de E-mail",
    component: Confirmation,
    isProtected: false
  }
];

export default routes;
