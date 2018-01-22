const Hello = artifacts.require("Hello")

contract("Hello1", accounts => {
  let hello

  before(async () => {
    hello = await Hello.deployed()
  })

  it("foo", async () => {
    assert.equal((await hello.getFoo()).toNumber(), 0)

    await hello.setFoo(5)

    assert.equal((await hello.getFoo()).toNumber(), 5)
  })
})
