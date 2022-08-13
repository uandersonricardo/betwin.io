import { createContext, ReactNode, useEffect, useState } from "react";

import { useToast } from "@chakra-ui/react";

import useFetch from "../hooks/useFetch";
import loginRequest from "../requests/login";
import logoutRequest from "../requests/logout";
import registerRequest from "../requests/register";

export type User = {
  id: string;
  username: string;
  email: string;
  cpf: string;
};

type SignInData = {
  username: string;
  password: string;
};

type SignUpData = {
  username: string;
  password: string;
  email: string;
  cpf: string;
};

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  cash: number | null;
  signIn: (data: SignInData) => Promise<void>;
  signUp: (data: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cash, setCash] = useState<number | null>(null);
  const toast = useToast();

  const { data: fetchData, error: fetchError } = useFetch(
    "/me",
    {},
    {
      enabled: !!user
    }
  );

  const { data: fetchCashData, error: fetchCashError } = useFetch(
    "/cash",
    {},
    {
      enabled: !!user,
      staleTime: 5 * 1000
    }
  );

  const isAuthenticated = !!user;

  useEffect(() => {
    const userJson = localStorage.getItem("user");

    if (userJson) {
      const user = JSON.parse(userJson) as User;

      setUser(user);
    }
  }, []);

  useEffect(() => {
    if (fetchError) {
      localStorage.removeItem("user");
      setUser(null);

      toast({
        title: "Atenção!",
        description: "Entre novamente.",
        status: "warning",
        duration: 3000,
        isClosable: true
      });
    }
  }, [fetchError]);

  useEffect(() => {
    if (fetchCashError) {
      toast({
        title: "Ops...",
        description: "Não foi possível obter o saldo.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  }, [fetchCashError]);

  useEffect(() => {
    if (fetchData) {
      localStorage.setItem("user", JSON.stringify(fetchData.user));
      setUser(fetchData.user);
    }
  }, [fetchData]);

  useEffect(() => {
    if (fetchCashData) {
      setCash(fetchCashData.cash);
    }
  }, [fetchCashData]);

  const signIn = async ({ username, password }: SignInData) => {
    const res = await loginRequest({ username, password });

    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
  };

  const signOut = async () => {
    await logoutRequest().catch(() => null);

    localStorage.removeItem("user");

    setUser(null);
  };

  const signUp = async (body: SignUpData) => {
    await registerRequest(body);
  };

  return (
    <AuthContext.Provider
      value={{ user, cash, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
