"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "./ui/sonner";
import Header from "./Header";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="absolute h-15">
        <Header />
      </div>
      {children}
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          classNames: {
            toast: "text-xl",
            title: "text-lg font-semibold",
            description: "text-sm opacity-80",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default AppProvider;
