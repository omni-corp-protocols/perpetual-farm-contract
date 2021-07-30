import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.12",
      },
      {
        version: "0.5.16",
      }
    ]
  },
  networks: {
    bsc: {
      url: process.env.bscRpc || "https://bsc-dataseed.binance.org/",
      accounts: [process.env["PRIVATE_KEY"]],
    },
  },
};

export default config;
