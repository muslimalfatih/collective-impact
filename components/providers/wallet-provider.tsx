'use client'

import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { AuthClient } from "@dfinity/auth-client"

interface WalletContextType {
  isConnected: boolean
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  principalId: string | null
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  connect: async () => {},
  disconnect: async () => {},
  principalId: null,
})

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [principalId, setPrincipalId] = useState<string | null>(null)
  const [authClient, setAuthClient] = useState<AuthClient | null>(null)

  useEffect(() => {
    AuthClient.create().then(async (client) => {
      setAuthClient(client);
      const isAuthenticated = await client.isAuthenticated();
      setIsConnected(isAuthenticated);
      
      if (isAuthenticated) {
        const identity = client.getIdentity();
        setPrincipalId(identity.getPrincipal().toString());
      }
    });
  }, []);

  const connect = async () => {
    if (!authClient) return;
    setIsConnected(true);
    const identity = authClient.getIdentity();
    setPrincipalId(identity.getPrincipal().toString());
  }

  const disconnect = async () => {
    if (!authClient) return;
    await authClient.logout();
    setIsConnected(false);
    setPrincipalId(null);
  }

  return (
    <WalletContext.Provider value={{ isConnected, connect, disconnect, principalId }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext) 