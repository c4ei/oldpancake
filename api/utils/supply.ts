import BigNumber from "bignumber.js";
import { getContract } from "./web3";
import { CAKE, DEAD, LOCKED_CAKE_POOL } from "./constants";
import bep20 from "./abis/bep20.json";
import lockedCakePool from "./abis/lockedCakePool.json";

const contract = getContract(bep20, CAKE);
const lockedCakePoolContract = getContract(lockedCakePool, LOCKED_CAKE_POOL);

export const getTotalSupply = async (): Promise<BigNumber> => {
  const supply = await contract.methods.totalSupply().call();

  return new BigNumber(supply);
};

export const getBurnedSupply = async (): Promise<BigNumber> => {
  const balance = await contract.methods.balanceOf(DEAD).call();

  return new BigNumber(balance);
};

export const getLockedCake = async (): Promise<BigNumber> => {
  const lockedAmount = await lockedCakePoolContract.methods.totalLockedAmount().call();
  return new BigNumber(lockedAmount);
};

/**
 * User (Planet Finance) built a contract on top of our original manual CAKE pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * * 사용자(Planet Finance)는 원래 수동 CAKE 풀 위에 계약을 구축했으며,
 * 하지만 계약서는 Masterchef v1에서 v2로 마이그레이션을 수행할 때 토큰이 멈추는 방식으로 작성되었습니다.
 * 이 붙어 있는 토큰은 영원히 사라지고(중간 게시물 참조) 유통되지 않는 것으로 간주될 수 있습니다."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */
export const planetFinanceBurnedTokensWei = new BigNumber("637407922445268000000000");

export const maxSupply = 750000000;
