require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CXKVEZdtAb01EsbjVb0rfuNGJRF1ffp5',
      accounts: [ '4ed26701e78df2baa5481dfeef1c49ffd698ade7477c6a4a1711d29cda05dcd0' ]
    }
  }
}