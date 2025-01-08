const reactReact = require("../src/index");

describe("default export", () => {
    it("should be not null", () => {
        if (reactReact == null)
            throw new Error("");
        if (typeof reactReact != "object")
            throw new Error("");
        if (Object.keys(reactReact) != 0)
            throw new Error("");
    });
});
