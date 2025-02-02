/* eslint-disable */
"use client";
import { Connect2ICProvider } from "@connect2ic/react";
import React from "react";
import { createClient } from "@connect2ic/core";
import "@connect2ic/core/style.css";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
// import * as myCaniter from "../../.dfx/local/canisters/backend";

interface I_ProviderProps {
  children: React.ReactNode;
}

const provider = new InternetIdentity({
  // boolean
  dev: true,
  // whitelisted canisters
  whitelist: [],
  // The url for the providers frontend
  providerUrl: "https://identity.ic0.app",
  // The host used for canisters
  host: window.location.origin,
});

export const IcpProvider = (props: I_ProviderProps) => {
  const client = createClient({
    canisters: {},
    providers: [provider],
  });
  return (
    <Connect2ICProvider client={client}>{props.children}</Connect2ICProvider>
  );
};
