const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("Test 1000", () => {
  test("1000 is 1,000", () => {
    expect(addCommas(1000)).toEqual("1,000");
  });
});

describe("Test 100", () => {
  test("100 does not show comma", () => {
    expect(addCommas(100)).toEqual("100");
  });
});

describe("Test multiple commas", ()=> {
  test("Multiple commas in larger number", () => {
    expect(addCommas(1000000)).toEqual("1,000,000");
  });
});

describe("Test negative number", () => {
  test("Check negative numbers",() => {
    expect(addCommas(-1000)).toEqual("-1,000");
  });
});

