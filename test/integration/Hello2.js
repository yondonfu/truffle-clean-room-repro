const Hello = artifacts.require("Hello")

contract("Hello2", accounts => {
  let hello

  before(async () => {
    hello = await Hello.deployed()
  })

  it("foo", async () => {
    assert.equal((await hello.getFoo()).toNumber(), 0)

    await hello.setFoo(7)

    assert.equal((await hello.getFoo()).toNumber(), 7)
  })
})
