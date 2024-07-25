# @jshow/cli

`@jshow/cli` 是 `jShow` 的命令行工具集，本身基于 [commander](https://www.npmjs.com/package/commander) 开发。

本身提供 `jshow` 命令入口，支持自定义命令注册，方便根据项目需求扩展命令。

为了方便开发，减少库依赖（特别是全局依赖），`@jshow/cli` 除了支持自身的函数外，还导出了整个 `commander` 库内容，方便开发者直接使用。
