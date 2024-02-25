![logo](https://github.com/yuafun/neoxa-public-api/assets/159938474/2818834c-77f4-40bc-a1ff-cdf4cd56af9f)

![Static Badge](https://img.shields.io/badge/Node-20.11.1-blue?link=https%3A%2F%2Fgithub.com%2Fyuafun%2Fneoxa-public-api)
![GitHub last commit](https://img.shields.io/github/last-commit/yuafun/neoxa-public-api) ![NPM Downloads](https://img.shields.io/npm/dw/neoxa-public-api)


# Neoxa Public API
The project is a tool that allows developers to interact with the Neoxa API. You can easily integrate your project by calling the API with this tool.

## Installation
```
npm install neoxa-public-api
```

## Usage
```
import * as neoxa from "neoxa-public-api"
const summary = await neoxa.getSummary();
```
or
```
import { getSummary } from "neoxa-public-api"
```

# Public API List
```
import {
  getDifficulty,
  getConnectionCount,
  getBlockCount,
  getBlockHash,
  getBlock,
  getRawTransaction,
  getNetworkHashps,
  getMasternodeCount,
  getMoneySupply,
  getDistribution,
  getAddress,
  getAddressTxs,
  getTx,
  getBalance,
  getLastTxs,
  getCurrentPrice,
  getNetworkPeers,
  getBasicStats,
  getSummary,
  getMasternodeList,
  getMasternodeRewards,
  getMasternodeRewardsTotal,
} from "neoxa-public-api";
```
