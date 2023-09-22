const shallowObj = require("./shallowObj");

test("Object close of the parameter", () => {
  const obj = {
    person: "Sabbir",
    age: 19,
  };
  expect(shallowObj(obj)).toStrictEqual(obj);
});
