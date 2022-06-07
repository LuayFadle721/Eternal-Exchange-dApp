require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
      goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/6lRa80ZiHfNiUfxrknnsmyLswNd9tYCa',
      accounts: ['4ed26701e78df2baa5481dfeef1c49ffd698ade7477c6a4a1711d29cda05dcd0'],
    },
  },
};