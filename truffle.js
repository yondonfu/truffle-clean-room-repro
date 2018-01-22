module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    parity: {
      host: "localhost",
      port: 8545,
      network_id: 7777,
      gas: 6700000
    }
  }
};
