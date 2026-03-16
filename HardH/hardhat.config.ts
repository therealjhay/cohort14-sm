import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { CELO_SEPOLIA_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    celo_sepolia: {
      url: `${CELO_SEPOLIA_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
