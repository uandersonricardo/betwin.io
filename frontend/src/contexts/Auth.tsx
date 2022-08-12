import { createContext, ReactNode, useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import api from "../services/api";

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
  email: string;
  cpf: string;
};

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
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
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const { data: fetchData, error: fetchError } = useFetch(
    "/user",
    {},
    {
      enabled: hasToken
    }
  );

  const isAuthenticated = !!user;

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      setHasToken(true);
    }
  }, []);

  useEffect(() => {
    if (fetchError) {
      setHasToken(false);
    }
  }, [fetchError]);

  useEffect(() => {
    if (fetchData) {
      setUser(fetchData);
    }
  }, [fetchData]);

  const signIn = async ({ username, password }: SignInData) => {
    const res = await api.post("/login", {
      username,
      password
    });

    localStorage.setItem("userId", res.data.userId);

    setHasToken(true);
  };

  const signOut = async () => {
    await api.post("/logout").catch(() => null);

    localStorage.removeItem("userId");

    setHasToken(false);
  };

  const signUp = async (body: SignUpData) => {
    const res = await api.post("/register", body);

    localStorage.setItem("userId", res.data.userId);

    setHasToken(true);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
