import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import routes from "../config/routes";
import Layout from "../layout";
import Loading from "../layout/Loading";

const unprotectedRoutes = routes.filter(route => !route.isProtected);

const Root = () => {
  const logged = false;

  return (
    <BrowserRouter>
      {logged ? (
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
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Root;
