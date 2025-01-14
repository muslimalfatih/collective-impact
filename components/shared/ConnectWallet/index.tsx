"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthClient } from "@dfinity/auth-client";
import { useWallet } from "@/components/providers/wallet-provider";

export default function ConnectWallet() {
  const { isConnected, connect } = useWallet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      const authClient = await AuthClient.create();
      
      // Start the login process
      await new Promise((resolve, reject) => {
        authClient.login({
          identityProvider: "https://identity.ic0.app", // IC's default identity provider
          onSuccess: () => {
            connect();
            resolve(true);
          },
          onError: (error) => {
            console.error("Login failed:", error);
            reject(error);
          },
        });
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Button 
      onClick={handleConnect} 
      disabled={isConnecting || isConnected}
    >
      {isConnecting 
        ? "Connecting..." 
        : isConnected 
          ? "Connected" 
          : "Connect Wallet"
      }
    </Button>
  );
} 