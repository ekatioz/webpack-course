import express from "express"
import path from "path"

const server = express()

const webpack = require("webpack");
const config = require("../../config.webpack.dev");
const compiler = webpack(config);

const devMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
)

const hotMiddleware = require("webpack-hot-middleware")(compiler)

server.use(devMiddleware);
server.use(hotMiddleware);

const staticMiddleware = express.static("dist")

server.use(staticMiddleware)

server.listen(8080, () => {
  console.log("Server ist listenening")
})