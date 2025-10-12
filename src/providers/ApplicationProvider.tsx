"use client";

import { createContext, useContext, useState } from "react";

type ApplicationContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ApplicationContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("useApplication must be used within an ApplicationProvider");
  }
  return context;
}

