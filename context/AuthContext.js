"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authRedirectPath, setAuthRedirectPath] = useState(null);

  const openAuthModal = (redirectPath = null) => {
    setAuthRedirectPath(redirectPath);
    setAuthModalOpen(true);
  };
  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthRedirectPath(null);
  };

  const handleOpenChange = (open) => {
    setAuthModalOpen(open);
    if (!open) setAuthRedirectPath(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authModalOpen,
        authRedirectPath,
        setAuthModalOpen: handleOpenChange,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
