import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import api from "../services/api";

const useFetch = (path: string, params = {}, options = {}) => {
  const [sessionExpired, setSessionExpired] = useState(false);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      [path, params],
      async () => {
        const response = await api.get(path, {
          params
        });

        return response.data;
      },
      {
        staleTime: 60 * 1000,
        onError: (err: any) => {
          if (err.response?.status === 401) {
            setSessionExpired(true);
          }
        },
        ...options
      }
    );

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    sessionExpired
  };
};

export default useFetch;
