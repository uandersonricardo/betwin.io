import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";

import routes from "../config/routes";
import Loading from "./Loading";

const protectedRoutes = routes.filter(route => route.isProtected);

const Main: React.FC = () => (
  <Flex direction="column" as="main">
    <Routes>
      {protectedRoutes.map(({ component: Element, name, path }) => (
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
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  </Flex>
);

export default Main;
