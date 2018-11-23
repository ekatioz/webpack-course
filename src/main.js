require("webpack-hot-middleware/client?reload=true")
require("./main.styl");
require("./index.html");

var a = async args => {
  const { a, b } = args;

  await console.log("hello!!", a, b);
  console.log("done");

}

a({ a: 1, b: 2 })