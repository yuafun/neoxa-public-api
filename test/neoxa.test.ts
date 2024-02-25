import { describe, expect, test } from '@jest/globals';
import * as Neoxa from "../lib/neoxa"
describe('Neoxa API Calls', () => {
    test('getDifficulty --->', async () => {
        const difficulty = await Neoxa.getDifficulty()
        expect(typeof difficulty).toEqual('number')
    });

    test('getConnectionCount --->', async () => {
        const connectionCount = await Neoxa.getConnectionCount()
        expect(typeof connectionCount).toEqual('number')
    });

    test('getBlockCount --->', async () => {
        const blockCount = await Neoxa.getBlockCount()
        expect(typeof blockCount).toEqual('number')
    });

    test('getBlockHash --->', async () => {
        const blockHash = await Neoxa.getBlockHash(612313)
        expect(typeof blockHash).toEqual('string')
    });

    test('getBlock --->', async () => {
        const block = await Neoxa.getBlock('0000000000083be372ae59dc8e316fb32b93571d4febe1bdc3b8059c3c5de3e8')
        expect(typeof block).toEqual('object')
        expect(block?.hash).toBe('0000000000083be372ae59dc8e316fb32b93571d4febe1bdc3b8059c3c5de3e8')
    });

    test('getRawTransaction --->', async () => {
        const rawTransaction = await Neoxa.getRawTransaction('8c2a5ca2d99845843094ed384a3b6ff7ec577bd2ca9ab57dcf6debca4184dd62', 0)
        expect(typeof rawTransaction).toEqual('string')
    });

    test('getNetworkHashps --->', async () => {
        const networkHashps = await Neoxa.getNetworkHashps()
        expect(typeof networkHashps).toEqual('number')
    });

    // API Error, this test is held
    // test('getVoteList --->', async () => {
    //     const voteList = await Neoxa.getVoteList()
    //     expect(typeof voteList).toEqual('number')
    // });

    test('getMasternodeCount --->', async () => {
        const masternodeCount = await Neoxa.getMasternodeCount()
        const { total, enabled } = masternodeCount;
        expect(typeof masternodeCount).toEqual('object')
        expect(typeof total).toEqual('number')
        expect(typeof enabled).toEqual('number')
    });
});

describe('Neoxa Extended API', () => {
    test('getMoneySupply --->', async () => {
        const supply = await Neoxa.getMoneySupply()
        expect(typeof supply).toEqual('number');
    });

    test('getDistribution --->', async () => {
        const distribution = await Neoxa.getDistribution()
        const { supply } = distribution
        expect(typeof distribution).toEqual('object')
        expect(typeof supply).toEqual('number');

    });

    test('getAddress --->', async () => {
        const addresses = await Neoxa.getAddress('GJeEoPQPXjxxfkdBzQ23FSGWBN26iB9P9q')
        const { address, sent, received, balance, last_txs } = addresses
        expect(typeof addresses).toEqual('object');
        expect(typeof address).toEqual('string');
        expect(typeof sent).toEqual('number');
        expect(typeof received).toEqual('number');
        expect(typeof balance).toEqual('string');
        expect(typeof last_txs).toEqual('object');
    }, 10000);

    test('getAddressTxs --->', async () => {
        const addressTxs = await Neoxa.getAddressTxs('GJeEoPQPXjxxfkdBzQ23FSGWBN26iB9P9q', 0, 5)
        const { timestamp, txid, sent, received, balance } = addressTxs[0]
        expect(typeof addressTxs).toEqual('object');
        expect(typeof timestamp).toEqual('number');
        expect(typeof txid).toEqual('string');
        expect(typeof sent).toEqual('number');
        expect(typeof received).toEqual('number');
        expect(typeof balance).toEqual('number');

    }, 10000);

    test('getTx --->', async () => {
        const tx = await Neoxa.getTx('8c2a5ca2d99845843094ed384a3b6ff7ec577bd2ca9ab57dcf6debca4184dd62');
        const { active } = tx
        expect(typeof tx).toEqual('object');
        expect(typeof active).toEqual('string')
    });

    test('getBalance --->', async () => {
        const balance = await Neoxa.getBalance('GJeEoPQPXjxxfkdBzQ23FSGWBN26iB9P9q')
        expect(typeof balance).toEqual('number');
    });

    test('getLastTxs --->', async () => {
        const lastTxs = await Neoxa.getLastTxs(10, 0, 10)
        const { blockindex, blockhash, txid, recipients, amount, timestamp } = lastTxs[0];
        expect(typeof lastTxs).toEqual('object');
        expect(typeof blockindex).toEqual('number');
        expect(typeof blockhash).toEqual('string');
        expect(typeof txid).toEqual('string');
        expect(typeof recipients).toEqual('number');
        expect(typeof amount).toEqual('number');
        expect(typeof timestamp).toEqual('number');
    }, 20000);

    test('getCurrentPrice --->', async () => {
        const currentPrice = await Neoxa.getCurrentPrice()
        const { last_price_btc, last_price_usd } = currentPrice;
        expect(typeof currentPrice).toEqual('object');
        expect(typeof last_price_btc).toEqual('number');
        expect(typeof last_price_usd).toEqual('number');
    });

    test('getNetworkPeers --->', async () => {
        const networkPeers = await Neoxa.getNetworkPeers()
        const { address } = networkPeers[0]
        expect(typeof networkPeers).toEqual('object');
        expect(typeof address).toEqual('string');
    });

    test('getBasicStats --->', async () => {
        const basicStats = await Neoxa.getBasicStats()
        const { block_count, money_supply, last_price_btc, last_price_usd, masternode_count } = basicStats;
        expect(typeof basicStats).toEqual('object');
        expect(typeof block_count).toEqual('number');
        expect(typeof money_supply).toEqual('number');
        expect(typeof last_price_btc).toEqual('number');
        expect(typeof last_price_usd).toEqual('number');
        expect(typeof masternode_count).toEqual('number');
    });
    let blockHeight;
    test('getSummary --->', async () => {
        const summary = await Neoxa.getSummary()
        const { difficulty, difficultyHybrid, supply, hashrate, lastPrice, connections, masternodeCountOnline, masternodeCountOffline, blockcount } = summary;
        blockHeight = blockcount
        expect(typeof summary).toEqual('object');
        expect(typeof difficulty).toEqual('number');
        expect(typeof difficultyHybrid).toEqual('string');
        expect(typeof supply).toEqual('number');
        expect(typeof hashrate).toEqual('string');
        expect(typeof lastPrice).toEqual('number');
        expect(typeof connections).toEqual('number');
        expect(typeof masternodeCountOnline).toEqual('number');
        expect(typeof masternodeCountOffline).toEqual('number');
        expect(typeof blockcount).toEqual('number');
    });

    test('getMasternodeList --->', async () => {
        const masternodeList = await Neoxa.getMasternodeList()
        const { rank, network, txhash, outidx, status, addr, version, lastseen, activetime, lastpaid, claim_name, ip_address, last_paid_block } = masternodeList[0]
        expect(typeof masternodeList).toEqual('object');
        expect(typeof rank).toEqual('number');
        expect(typeof network).toEqual('string');
        expect(typeof txhash).toEqual('string');
        expect(typeof outidx).toEqual('number');
        expect(typeof status).toEqual('string');
        expect(typeof addr).toEqual('string');
        expect(typeof version).toEqual('number');
        expect(typeof lastseen).toEqual('number');
        expect(typeof activetime).toEqual('number');
        expect(typeof lastpaid).toEqual('number');
        expect(typeof claim_name).toEqual('string');
        expect(typeof ip_address).toEqual('string');
        expect(typeof last_paid_block).toEqual('number');
    }, 10000);

    test('getMasternodeRewards --->', async () => {
        const masternodeRewards = await Neoxa.getMasternodeRewards('GJeEoPQPXjxxfkdBzQ23FSGWBN26iB9P9q', blockHeight - 1000)
        expect(typeof masternodeRewards).toEqual('object');
    }, 20000);

    test('getMasternodeRewardsTotal --->', async () => {
        const masternodeRewardsTotal = await Neoxa.getMasternodeRewardsTotal('GJeEoPQPXjxxfkdBzQ23FSGWBN26iB9P9q', blockHeight - 1000)
        expect(typeof masternodeRewardsTotal).toEqual('number');
    }, 20000);

});