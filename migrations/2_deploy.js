const Hello = artifacts.require("Hello")

module.exports = function(deployer) {
  console.log("MIGRATION CALLED")
  deployer.deploy(Hello)
}
