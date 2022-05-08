import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Credentials, UserRegistration } from '../../types';
import AuthService, { AuthPromise } from './auth-service';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  clearError: () => void,
  login: (credentials: Credentials, next: string) => void,
  logout: () => void,
  register: (userRegistration: UserRegistration) => void,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [error, setError] = useState<AuthContextType['error']>(null);

  const authenticate = async (credentials: Credentials, authMethod: AuthPromise, next = '/admin') => {
    try {
      const loggedInUser = await authMethod(credentials);
      setUser(loggedInUser);
      navigate(next);
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    }
  };

  const login: AuthContextType['login'] = async (credentials: Credentials, next) => {
    if (error) {
      setError(null);
    }
    authenticate(credentials, AuthService.login, next);
  };

  const register: AuthContextType['register'] = async ({ email, password, repeatPassword }) => {
    if (error) {
      setError(null);
    }
    if (password !== repeatPassword) {
      setError('Slaptažodžiai nesutampa');
      return;
    }
    const credentials: Credentials = {
      email, password,
    };
    authenticate(credentials, AuthService.register);
  };

  const logout: AuthContextType['logout'] = () => {
    setUser(null);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn: Boolean(user),
    error,
    clearError,
    login,
    logout,
    register,
  }), [user, error]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
