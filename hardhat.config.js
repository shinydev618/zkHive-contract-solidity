require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
            // details: { yul: false },
          },
        },
      },
      // {
      //   version: "0.8.19",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 2000,
      //       // details: { yul: false },
      //     },
      //   },
      // },
      // {
      //   version: "0.8.20",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 2000,
      //       // details: { yul: false },
      //     },
      //   },
      // },
      {
        version: "0.8.14",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
            // details: { yul: false },
          },
        },
      },
      {
        version: "0.8.23",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
            // details: { yul: false },
          },
        },
      },
    ],
  },
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    goerli: {
      // url: "https://goerli.infura.io/v3/f0d697f8f338430d84ebc46b03e96ca0",
      url: "https://eth-goerli.g.alchemy.com/v2/P_W6V2Hj4tcq5Jw717QdFK4w1MJRMky-",
      chainId: 5,
      accounts: [`0x${process.env.PRIVATEKEY}`],
    },
    sepolia: {
      // url: "https://goerli.infura.io/v3/f0d697f8f338430d84ebc46b03e96ca0",
      url: "https://eth-sepolia.g.alchemy.com/v2/SWVhmC47hTF030ouhPRSCgETkfh6mTlv",
      chainId: 11155111,
      accounts: [`0x${process.env.PRIVATEKEY}`],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f0d697f8f338430d84ebc46b03e96ca0",
      chainId: 4,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/f0d697f8f338430d84ebc46b03e96ca0",
      chainId: 1,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    bsc: {
      // url: "https://binance.llamarpc.com",
      url: "https://bsc.publicnode.com",
      chainId: 56,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    bscTestnet: {
      url: "https://bsc-testnet.publicnode.com",
      chainId: 97,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    celotest: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      chainId: 80001,
      gas: 2100000,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY],
    },
    nautchain: {
      url: "https://api.proteus.nautchain.xyz/solana",
      chainId: 88002,
      accounts: [`0x${process.env.PRIVATEKEY}`],
      gas: "auto",
      gasPrice: "auto",
      maxCodeSize: 10000000,
    },
  },
};
