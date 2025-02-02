"use client";
import { Connect2ICProvider } from "@connect2ic/react";
import React from "react";
import { createClient } from "@connect2ic/core";
import "@connect2ic/core/style.css";
interface I_ProviderProps {
  children: React.ReactNode;
}
export const IcpProvider = (props: I_ProviderProps) => {
  const client = createClient({
    canisters: {},
    providers: [],
  });
  return (
    <Connect2ICProvider client={client}>{props.children}</Connect2ICProvider>
  );
};
