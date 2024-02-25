import axios from "axios"

const baseUrl = "https://explorer.neoxa.net"; // Neoxa API base url

/**
 * Returns the current difficulty.
 */
export const getDifficulty = async () => {
    try {
        const url = "/api/getdifficulty"
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}

/**
 * Returns the number of connections the block explorer has to other nodes
 */
export const getConnectionCount = async () => {
    try {
        const url = "/api/getconnectioncount"
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}

/**
 * Returns the current block index
 */
export const getBlockCount = async () => {
    try {
        const url = "/api/getblockcount"
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}

/**
 * Returns the hash of the block at [index]; index 0 is the genesis block
 */
export const getBlockHash = async (index = 0) => {
    try {
        const url = `/api/getblockhash?index=${index}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns information about the block with the given hash
 */
export const getBlock = async (hash) => {
    try {
        const url = `/api/getblock?hash=${hash}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns raw transaction representation for given transaction id. decrypt can be set to 0(false) or 1(true)
 */
export const getRawTransaction = async (txid, decrypt) => {
    try {
        const url = `/api/getrawtransaction?txid=${txid}&decrypt=${decrypt}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}

/**
 * Returns the current network hashrate. (hash/s)
 */
export const getNetworkHashps = async () => {
    try {
        const url = `/api/getnetworkhashps`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns the current vote list
 */
export const getVoteList = async () => {
    try {
        const url = `/api/getvotelist`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns the total number of masternodes on the network
 */
export const getMasternodeCount = async () => {
    try {
        const url = `/api/getmasternodecount`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns current money supply
 */
export const getMoneySupply = async () => {
    try {
        const url = `/ext/getmoneysupply`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns wealth distribution stats
 */
export const getDistribution = async () => {
    try {
        const url = `/ext/getdistribution`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns information for given address
 */
export const getAddress = async (address) => {
    try {
        const url = `/ext/getaddress/${address}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns last [length] transactions for address [hash], starting from offset [start]
 */
export const getAddressTxs = async (address, start, length) => {
    try {
        const url = `/ext/getaddresstxs/${address}/${start}/ ${length}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns information for given tx hash
 */
export const getTx = async (txid) => {
    try {
        const url = `/ext/gettx/${txid}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns current balance of given address
 */
export const getBalance = async (address) => {
    try {
        const url = `/ext/getbalance/${address}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns last [length] transactions greater than [min] coins, starting from offset [start]
 * Note: [length] is limited to returning 100 records per query
 */
export const getLastTxs = async (min, start, length) => {
    try {
        const url = `/ext/getlasttxs/${min}/${start}/${length}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns last known exchange price
 */
export const getCurrentPrice = async () => {
    try {
        const url = `/ext/getcurrentprice`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns the list of network peers that have connected to the explorer node in the last 24 hours
 */
export const getNetworkPeers = async () => {
    try {
        const url = `/ext/getnetworkpeers`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * eturns basic statistics about the coin including: block count, circulating supply, USD price, BTC price, # of masternodes
 */
export const getBasicStats = async () => {
    try {
        const url = `/ext/getbasicstats`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns a summary of coin data including: difficulty, hybrid difficulty, circulating supply, hash rate, BTC price, network connection count, block count, count of online masternodes, count of offline masternodes
 */
export const getSummary = async () => {
    try {
        const url = `/ext/getsummary`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns the complete list of masternodes on the network
 */
export const getMasternodeList = async () => {
    try {
        const url = `/ext/getmasternodelist`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns a list of masternode reward transactions for address [hash] that arrived after block height [since]
 */
export const getMasternodeRewards = async (address, since) => {
    try {
        const url = `/ext/getmasternoderewards/${address}/${since}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}
/**
 * Returns the total number of coins earned in masternode rewards for address [hash] that arrived after block height [since]
 */
export const getMasternodeRewardsTotal = async (address, since) => {
    try {
        const url = `/ext/getmasternoderewardstotal/${address}/${since}`
        const { data } = await axios({
            url: baseUrl + url,
            method: "GET"
        })
        return data
    } catch (err) {
        return err
    }
}

