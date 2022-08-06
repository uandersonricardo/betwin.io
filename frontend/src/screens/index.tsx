import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "../config/routes";
import Layout from "../layout";

const unprotectedRoutes = routes.filter(route => !route.isProtected);

const Root = () => {
  const logged = true;

  return (
    <BrowserRouter>
      {logged ? (
        <Layout />
      ) : (
        <Routes>
          {unprotectedRoutes.map(({ component: Element, name, path }) => (
            <Route key={name} path={path} element={<Element />} />
          ))}
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Root;
