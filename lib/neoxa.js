"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMasternodeRewardsTotal = exports.getMasternodeRewards = exports.getMasternodeList = exports.getSummary = exports.getBasicStats = exports.getNetworkPeers = exports.getCurrentPrice = exports.getLastTxs = exports.getBalance = exports.getTx = exports.getAddressTxs = exports.getAddress = exports.getDistribution = exports.getMoneySupply = exports.getMasternodeCount = exports.getVoteList = exports.getNetworkHashps = exports.getRawTransaction = exports.getBlock = exports.getBlockHash = exports.getBlockCount = exports.getConnectionCount = exports.getDifficulty = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://explorer.neoxa.net"; // Neoxa API base url
const getDifficulty = async () => {
    const url = "/api/getdifficulty";
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getDifficulty = getDifficulty;
const getConnectionCount = async () => {
    const url = "/api/getconnectioncount";
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getConnectionCount = getConnectionCount;
const getBlockCount = async () => {
    const url = "/api/getblockcount";
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getBlockCount = getBlockCount;
const getBlockHash = async (index = 0) => {
    const url = `/api/getblockhash?index=${index}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getBlockHash = getBlockHash;
const getBlock = async (hash) => {
    const url = `/api/getblock?hash=${hash}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getBlock = getBlock;
const getRawTransaction = async (txid, decrypt) => {
    const url = `/api/getrawtransaction?txid=${txid}&decrypt=${decrypt}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getRawTransaction = getRawTransaction;
const getNetworkHashps = async () => {
    const url = `/api/getnetworkhashps`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getNetworkHashps = getNetworkHashps;
const getVoteList = async () => {
    const url = `/api/getvotelist`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getVoteList = getVoteList;
const getMasternodeCount = async () => {
    const url = `/api/getmasternodecount`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getMasternodeCount = getMasternodeCount;
const getMoneySupply = async () => {
    const url = `/ext/getmoneysupply`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getMoneySupply = getMoneySupply;
const getDistribution = async () => {
    const url = `/ext/getdistribution`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getDistribution = getDistribution;
const getAddress = async (address) => {
    const url = `/ext/getaddress/${address}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getAddress = getAddress;
const getAddressTxs = async (address, start, length) => {
    const url = `/ext/getaddresstxs/${address}/${start}/ ${length}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getAddressTxs = getAddressTxs;
const getTx = async (txid) => {
    const url = `/ext/gettx/${txid}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getTx = getTx;
const getBalance = async (address) => {
    const url = `/ext/getbalance/${address}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getBalance = getBalance;
const getLastTxs = async (min, start, length) => {
    const url = `/ext/getlasttxs/${min}/${start}/${length}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getLastTxs = getLastTxs;
const getCurrentPrice = async () => {
    const url = `/ext/getcurrentprice`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getCurrentPrice = getCurrentPrice;
const getNetworkPeers = async () => {
    const url = `/ext/getnetworkpeers`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getNetworkPeers = getNetworkPeers;
const getBasicStats = async () => {
    const url = `/ext/getbasicstats`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getBasicStats = getBasicStats;
const getSummary = async () => {
    const url = `/ext/getsummary`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getSummary = getSummary;
const getMasternodeList = async () => {
    const url = `/ext/getmasternodelist`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getMasternodeList = getMasternodeList;
const getMasternodeRewards = async (address, from_block_height) => {
    const url = `/ext/getmasternoderewards/${address}/${from_block_height}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getMasternodeRewards = getMasternodeRewards;
const getMasternodeRewardsTotal = async (address, from_block_height) => {
    const url = `/ext/getmasternoderewardstotal/${address}/${from_block_height}`;
    const { data } = await (0, axios_1.default)({
        url: baseUrl + url,
        method: "GET"
    });
    return data;
};
exports.getMasternodeRewardsTotal = getMasternodeRewardsTotal;
