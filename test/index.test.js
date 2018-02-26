const { expect } = require("chai");
const reactReact = require("../src/index");

describe("default export", () => {
    it("should be not null", () => {
        expect(reactReact).to.eql({});
    });
});
