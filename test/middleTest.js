const eqArrays = require("../eqArrays");
const assert = require('chai').assert 
const middle = require("../middle");

describe("#middle", () => {
    it("returns middle", () => {
        assert.deepEqual(middle([1,2,3]), [2]);
    })
});