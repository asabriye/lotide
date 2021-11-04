const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
    
  it("returns last 2 elements", () => {
      assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"], ["Lighthouse", "Labs"]))
  })
});