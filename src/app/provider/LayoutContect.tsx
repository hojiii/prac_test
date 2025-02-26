"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LayoutContextType {
  value: number[];
  setValue: (value: number[]) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<number[]>([]);

  return (
    <LayoutContext.Provider value={{ value, setValue }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  return context;
};
