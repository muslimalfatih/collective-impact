import Types "types";
import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Error "mo:base/Error";
import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";

actor class DEX() {
  type Pool = Types.Pool;
  type SwapParams = Types.SwapParams;
  type AddLiquidityParams = Types.AddLiquidityParams;
  type Balance = Nat;

  private stable var poolEntries : [(Text, Pool)] = [];
  private var pools = HashMap.fromIter<Text, Pool>(poolEntries.vals(), 10, Text.equal, Text.hash);

  system func preupgrade() {
    poolEntries := Iter.toArray(pools.entries());
  };

  system func postupgrade() {
    poolEntries := [];
  };

  // Creates a new liquidity pool
  public shared(msg) func createPool(token0: Principal, token1: Principal) : async Text {
    let poolId = createPoolId(token0, token1);
    
    switch (pools.get(poolId)) {
      case (?_) { throw Error.reject("Pool already exists") };
      case null {
        let newPool: Pool = {
          token0 = token0;
          token1 = token1;
          reserve0 = 0;
          reserve1 = 0;
          totalShares = 0;
        };
        pools.put(poolId, newPool);
        return poolId;
      };
    };
  };

  // Add liquidity to a pool
  public shared(msg) func addLiquidity(params: AddLiquidityParams) : async Balance {
    let poolId = createPoolId(params.token0, params.token1);
    
    switch (pools.get(poolId)) {
      case null { throw Error.reject("Pool does not exist") };
      case (?pool) {
        // Implementation for adding liquidity
        // 1. Transfer tokens from user
        // 2. Calculate shares to mint
        // 3. Update pool reserves
        // 4. Mint LP tokens
        Debug.print("Adding liquidity to pool: " # poolId);
        return 0; // Return minted shares
      };
    };
  };

  // Swap tokens
  public shared(msg) func swap(params: SwapParams) : async Balance {
    let poolId = createPoolId(params.tokenIn, params.tokenOut);
    
    switch (pools.get(poolId)) {
      case null { throw Error.reject("Pool does not exist") };
      case (?pool) {
        // Implementation for token swap
        // 1. Calculate amount out
        // 2. Verify minimum amount out
        // 3. Transfer tokens
        // 4. Update pool reserves
        Debug.print("Executing swap in pool: " # poolId);
        return 0; // Return amount out
      };
    };
  };

  // Helper function to create consistent pool IDs
  private func createPoolId(token0: Principal, token1: Principal) : Text {
    if (Principal.compare(token0, token1) == #less) {
      Principal.toText(token0) # ":" # Principal.toText(token1)
    } else {
      Principal.toText(token1) # ":" # Principal.toText(token0)
    }
  };
};