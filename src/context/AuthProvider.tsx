import React, { createContext, useState, ReactNode } from 'react';

// 1. AuthContext의 형태를 정의합니다.
interface AuthContextType {
  auth: string | null;
  setAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

// createContext에 초기값을 전달하면서, 해당 값의 타입을 명확히 지정합니다.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // 초기값의 타입을 `string | null`로 지정합니다.
  const [auth, setAuth] = useState<string | null>(JSON.parse(localStorage.getItem('accessToken') || 'null'));

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
