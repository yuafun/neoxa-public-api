"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMasternodeRewardsTotal = exports.getMasternodeRewards = exports.getMasternodeList = exports.getSummary = exports.getBasicStats = exports.getNetworkPeers = exports.getCurrentPrice = exports.getLastTxs = exports.getBalance = exports.getTx = exports.getAddressTxs = exports.getAddress = exports.getDistribution = exports.getMoneySupply = exports.getMasternodeCount = exports.getVoteList = exports.getNetworkHashps = exports.getRawTransaction = exports.getBlock = exports.getBlockHash = exports.getBlockCount = exports.getConnectionCount = exports.getDifficulty = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://explorer.neoxa.net"; // Neoxa API base url
/**
 * Returns the current difficulty.
 */
const getDifficulty = async () => {
    try {
        const url = "/api/getdifficulty";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getDifficulty = getDifficulty;
/**
 * Returns the number of connections the block explorer has to other nodes
 */
const getConnectionCount = async () => {
    try {
        const url = "/api/getconnectioncount";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getConnectionCount = getConnectionCount;
/**
 * Returns the current block index
 */
const getBlockCount = async () => {
    try {
        const url = "/api/getblockcount";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getBlockCount = getBlockCount;
/**
 * Returns the hash of the block at [index]; index 0 is the genesis block
 */
const getBlockHash = async (index = 0) => {
    try {
        const url = `/api/getblockhash?index=${index}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getBlockHash = getBlockHash;
/**
 * Returns information about the block with the given hash
 */
const getBlock = async (hash) => {
    try {
        const url = `/api/getblock?hash=${hash}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getBlock = getBlock;
/**
 * Returns raw transaction representation for given transaction id. decrypt can be set to 0(false) or 1(true)
 */
const getRawTransaction = async (txid, decrypt) => {
    try {
        const url = `/api/getrawtransaction?txid=${txid}&decrypt=${decrypt}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getRawTransaction = getRawTransaction;
/**
 * Returns the current network hashrate. (hash/s)
 */
const getNetworkHashps = async () => {
    try {
        const url = `/api/getnetworkhashps`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getNetworkHashps = getNetworkHashps;
/**
 * Returns the current vote list
 */
const getVoteList = async () => {
    try {
        const url = `/api/getvotelist`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getVoteList = getVoteList;
/**
 * Returns the total number of masternodes on the network
 */
const getMasternodeCount = async () => {
    try {
        const url = `/api/getmasternodecount`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getMasternodeCount = getMasternodeCount;
/**
 * Returns current money supply
 */
const getMoneySupply = async () => {
    try {
        const url = `/ext/getmoneysupply`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getMoneySupply = getMoneySupply;
/**
 * Returns wealth distribution stats
 */
const getDistribution = async () => {
    try {
        const url = `/ext/getdistribution`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getDistribution = getDistribution;
/**
 * Returns information for given address
 */
const getAddress = async (address) => {
    try {
        const url = `/ext/getaddress/${address}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getAddress = getAddress;
/**
 * Returns last [length] transactions for address [hash], starting from offset [start]
 */
const getAddressTxs = async (address, start, length) => {
    try {
        const url = `/ext/getaddresstxs/${address}/${start}/ ${length}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getAddressTxs = getAddressTxs;
/**
 * Returns information for given tx hash
 */
const getTx = async (txid) => {
    try {
        const url = `/ext/gettx/${txid}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getTx = getTx;
/**
 * Returns current balance of given address
 */
const getBalance = async (address) => {
    try {
        const url = `/ext/getbalance/${address}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getBalance = getBalance;
/**
 * Returns last [length] transactions greater than [min] coins, starting from offset [start]
 * Note: [length] is limited to returning 100 records per query
 */
const getLastTxs = async (min, start, length) => {
    try {
        const url = `/ext/getlasttxs/${min}/${start}/${length}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getLastTxs = getLastTxs;
/**
 * Returns last known exchange price
 */
const getCurrentPrice = async () => {
    try {
        const url = `/ext/getcurrentprice`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getCurrentPrice = getCurrentPrice;
/**
 * Returns the list of network peers that have connected to the explorer node in the last 24 hours
 */
const getNetworkPeers = async () => {
    try {
        const url = `/ext/getnetworkpeers`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getNetworkPeers = getNetworkPeers;
/**
 * eturns basic statistics about the coin including: block count, circulating supply, USD price, BTC price, # of masternodes
 */
const getBasicStats = async () => {
    try {
        const url = `/ext/getbasicstats`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getBasicStats = getBasicStats;
/**
 * Returns a summary of coin data including: difficulty, hybrid difficulty, circulating supply, hash rate, BTC price, network connection count, block count, count of online masternodes, count of offline masternodes
 */
const getSummary = async () => {
    try {
        const url = `/ext/getsummary`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getSummary = getSummary;
/**
 * Returns the complete list of masternodes on the network
 */
const getMasternodeList = async () => {
    try {
        const url = `/ext/getmasternodelist`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getMasternodeList = getMasternodeList;
/**
 * Returns a list of masternode reward transactions for address [hash] that arrived after block height [since]
 */
const getMasternodeRewards = async (address, since) => {
    try {
        const url = `/ext/getmasternoderewards/${address}/${since}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getMasternodeRewards = getMasternodeRewards;
/**
 * Returns the total number of coins earned in masternode rewards for address [hash] that arrived after block height [since]
 */
const getMasternodeRewardsTotal = async (address, since) => {
    try {
        const url = `/ext/getmasternoderewardstotal/${address}/${since}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data;
    }
    catch (err) {
        return err;
    }
};
exports.getMasternodeRewardsTotal = getMasternodeRewardsTotal;
