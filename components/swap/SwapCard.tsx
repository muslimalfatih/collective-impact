// src/components/features/swap/SwapCard.tsx
"use client"

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useWallet } from '@/components/providers/wallet-provider'

export default function SwapCard() {
  const { isConnected, connect } = useWallet()
  const [amountIn, setAmountIn] = useState('')
  const [amountOut, setAmountOut] = useState('')

  const handleSwap = async () => {
    if (!isConnected) {
      await connect()
      return
    }
    // Implement swap logic
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Swap Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="0.0"
              value={amountIn}
              onChange={(e) => setAmountIn(e.target.value)}
            />
            <Button className="w-full">Select Token</Button>
          </div>
          
          <div className="space-y-2">
            <Input
              type="number"
              placeholder="0.0"
              value={amountOut}
              onChange={(e) => setAmountOut(e.target.value)}
              disabled
            />
            <Button className="w-full">Select Token</Button>
          </div>

          <Button 
            className="w-full" 
            onClick={handleSwap}
          >
            {isConnected ? 'Swap' : 'Connect Wallet'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}