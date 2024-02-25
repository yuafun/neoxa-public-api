"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMasternodeRewardsTotal = exports.getMasternodeRewards = exports.getMasternodeList = exports.getSummary = exports.getBasicStats = exports.getNetworkPeers = exports.getCurrentPrice = exports.getLastTxs = exports.getBalance = exports.getTx = exports.getAddressTxs = exports.getAddress = exports.getDistribution = exports.getMoneySupply = exports.getMasternodeCount = exports.getVoteList = exports.getNetworkHashps = exports.getRawTransaction = exports.getBlock = exports.getBlockHash = exports.getBlockCount = exports.getConnectionCount = exports.getDifficulty = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://explorer.neoxa.net"; // Neoxa API base url
const getDifficulty = async () => {
    try {
        const url = "/api/getdifficulty";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getDifficulty = getDifficulty;
const getConnectionCount = async () => {
    try {
        const url = "/api/getconnectioncount";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getConnectionCount = getConnectionCount;
const getBlockCount = async () => {
    try {
        const url = "/api/getblockcount";
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getBlockCount = getBlockCount;
const getBlockHash = async (index = 0) => {
    try {
        const url = `/api/getblockhash?index=${index}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getBlockHash = getBlockHash;
const getBlock = async (hash) => {
    try {
        const url = `/api/getblock?hash=${hash}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getBlock = getBlock;
const getRawTransaction = async (txid, decrypt) => {
    try {
        const url = `/api/getrawtransaction?txid=${txid}&decrypt=${decrypt}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getRawTransaction = getRawTransaction;
const getNetworkHashps = async () => {
    try {
        const url = `/api/getnetworkhashps`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getNetworkHashps = getNetworkHashps;
const getVoteList = async () => {
    try {
        const url = `/api/getvotelist`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getVoteList = getVoteList;
const getMasternodeCount = async () => {
    try {
        const url = `/api/getmasternodecount`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getMasternodeCount = getMasternodeCount;
const getMoneySupply = async () => {
    try {
        const url = `/ext/getmoneysupply`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getMoneySupply = getMoneySupply;
const getDistribution = async () => {
    try {
        const url = `/ext/getdistribution`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getDistribution = getDistribution;
const getAddress = async (address) => {
    try {
        const url = `/ext/getaddress/${address}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getAddress = getAddress;
const getAddressTxs = async (address, start, length) => {
    try {
        const url = `/ext/getaddresstxs/${address}/${start}/ ${length}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getAddressTxs = getAddressTxs;
const getTx = async (txid) => {
    try {
        const url = `/ext/gettx/${txid}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getTx = getTx;
const getBalance = async (address) => {
    try {
        const url = `/ext/getbalance/${address}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getBalance = getBalance;
const getLastTxs = async (min, start, length) => {
    try {
        const url = `/ext/getlasttxs/${min}/${start}/${length}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getLastTxs = getLastTxs;
const getCurrentPrice = async () => {
    try {
        const url = `/ext/getcurrentprice`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getCurrentPrice = getCurrentPrice;
const getNetworkPeers = async () => {
    try {
        const url = `/ext/getnetworkpeers`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getNetworkPeers = getNetworkPeers;
const getBasicStats = async () => {
    try {
        const url = `/ext/getbasicstats`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getBasicStats = getBasicStats;
const getSummary = async () => {
    try {
        const url = `/ext/getsummary`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getSummary = getSummary;
const getMasternodeList = async () => {
    try {
        const url = `/ext/getmasternodelist`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getMasternodeList = getMasternodeList;
const getMasternodeRewards = async (address, from_block_height) => {
    try {
        const url = `/ext/getmasternoderewards/${address}/${from_block_height}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getMasternodeRewards = getMasternodeRewards;
const getMasternodeRewardsTotal = async (address, from_block_height) => {
    try {
        const url = `/ext/getmasternoderewardstotal/${address}/${from_block_height}`;
        const { data } = await (0, axios_1.default)({
            url: baseUrl + url,
            method: "GET"
        });
        return data
    } catch (err) {
        return err
    };
};
exports.getMasternodeRewardsTotal = getMasternodeRewardsTotal;
