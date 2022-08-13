import React from "react";

import { Flex } from "@chakra-ui/react";
import { Route, Routes, Navigate } from "react-router-dom";

import Loading from "../components/Common/Loading";
import routes from "../config/routes";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const protectedRoutes = routes.filter(route => route.isProtected);

const Main: React.FC = () => (
  <Flex direction="row" flex="auto" as="main" overflow="hidden">
    <LeftAside />
    <Flex
      bg="gray.100"
      flex="1"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      borderStyle="solid"
      borderColor="gray.700"
      color="white"
      direction="column"
      overflow="auto"
      as="article"
    >
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Flex>
    <RightAside />
  </Flex>
);

export default Main;
