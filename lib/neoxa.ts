import axios from "axios"

const baseUrl = "https://explorer.neoxa.net"; // Neoxa API base url

export const getDifficulty = async () => {
    const url = "/api/getdifficulty"
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}


export const getConnectionCount = async () => {
    const url = "/api/getconnectioncount"
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}


export const getBlockCount = async () => {
    const url = "/api/getblockcount"
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}


export const getBlockHash = async (index = 0) => {
    const url = `/api/getblockhash?index=${index}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getBlock = async (hash) => {
    const url = `/api/getblock?hash=${hash}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getRawTransaction = async (txid, decrypt) => {
    const url = `/api/getrawtransaction?txid=${txid}&decrypt=${decrypt}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}


export const getNetworkHashps = async () => {
    const url = `/api/getnetworkhashps`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getVoteList = async () => {
    const url = `/api/getvotelist`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getMasternodeCount = async () => {
    const url = `/api/getmasternodecount`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getMoneySupply = async () => {
    const url = `/ext/getmoneysupply`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getDistribution = async () => {
    const url = `/ext/getdistribution`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getAddress = async (address) => {
    const url = `/ext/getaddress/${address}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getAddressTxs = async (address, start, length) => {
    const url = `/ext/getaddresstxs/${address}/${start}/ ${length}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getTx = async (txid) => {
    const url = `/ext/gettx/${txid}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getBalance = async (address) => {
    const url = `/ext/getbalance/${address}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getLastTxs = async (min, start, length) => {
    const url = `/ext/getlasttxs/${min}/${start}/${length}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getCurrentPrice = async () => {
    const url = `/ext/getcurrentprice`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getNetworkPeers = async () => {
    const url = `/ext/getnetworkpeers`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getBasicStats = async () => {
    const url = `/ext/getbasicstats`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getSummary = async () => {
    const url = `/ext/getsummary`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getMasternodeList = async () => {
    const url = `/ext/getmasternodelist`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getMasternodeRewards = async (address, from_block_height) => {
    const url = `/ext/getmasternoderewards/${address}/${from_block_height}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

export const getMasternodeRewardsTotal = async (address, from_block_height) => {
    const url = `/ext/getmasternoderewardstotal/${address}/${from_block_height}`
    const { data } = await axios({
        url: baseUrl + url,
        method: "GET"
    })
    return data
}

