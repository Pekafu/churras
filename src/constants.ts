import { ethers } from "ethers";

// tokens with total USD amount below this threshold will not be displayed
export const MIN_DISPLAY_AMOUNT = 0.05;
export const ETHERSCAN_API_KEY = "5E9AEFB4BCJZ71MGI2CZV8NP3CF9FM8Q2H";
const ALCHEMY_API_KEY = "hFVzUX3b0LBuuGVTg6xU-RKxkHyND6ND";
export const DEFAULT_PROVIDER = ethers.getDefaultProvider("homestead", {
  etherscan: ETHERSCAN_API_KEY,
  alchemy: ALCHEMY_API_KEY,
});
