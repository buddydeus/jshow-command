# @jshow/cli

`@jshow/cli` is a command line tool set for `jShow`, which is developed based on [commander](https://www.npmjs.com/package/commander).

It provides the `jshow` command entry and supports custom command registration, which is convenient for extending commands according to project requirements.

In order to facilitate development and reduce library dependencies (especially global dependencies), `@jshow/cli` not only supports its own functions, but also exports the entire `commander` library content for developers to use directly.
