const ShallowObj = require("./shallowObj");

test("Object close of the parameter", () => {
  const obj = {
    person: "Sabbir",
    age: 19,
  };
  expect(new ShallowObj(obj)).toStrictEqual(obj);
});
