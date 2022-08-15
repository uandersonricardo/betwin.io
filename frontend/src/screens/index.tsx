import React, { useContext } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import routes from "../config/routes";
import { AuthContext } from "../contexts/Auth";
import Layout from "../layout";
import Loading from "../layout/Loading";

const unprotectedRoutes = routes.filter(route => !route.isProtected);

const Root = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <Layout />
      ) : (
        <Routes>
          {unprotectedRoutes.map(({ component: Element, name, path }) => (
            <Route
              key={name}
              path={path}
              element={
                <React.Suspense fallback={<Loading />}>
                  <Element />
                </React.Suspense>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Root;
