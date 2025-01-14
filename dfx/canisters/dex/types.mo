// dfx/canisters/dex/types.mo
module {
  public type TokenId = Principal;
  public type Balance = Nat;
  
  public type Pool = {
    token0: TokenId;
    token1: TokenId;
    reserve0: Balance;
    reserve1: Balance;
    totalShares: Balance;
  };

  public type SwapParams = {
    tokenIn: TokenId;
    tokenOut: TokenId;
    amountIn: Balance;
    minAmountOut: Balance;
  };

  public type AddLiquidityParams = {
    token0: TokenId;
    token1: TokenId;
    amount0Desired: Balance;
    amount1Desired: Balance;
    amount0Min: Balance;
    amount1Min: Balance;
  };
};