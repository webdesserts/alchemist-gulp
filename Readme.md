alchemist-gulp
==============

`alchemist-gulp` is a [gulp-registry][] used for all plugins in the [alchemist
project][]. It contains all tasks necessary for building and testing each
alchemist plugin. The Registry is for the most part self-documenting so to see a
list of available tasks and what they're good for, check out the [index.js][].

Getting Started
---------------
```
var AlchemistRegistry = require('alchemist-gulp')
var pkg = require('./package.json')

gulp.registry(new AlchemistRegistry({ package: pkg }))
```

[gulp-registry]: https://github.com/gulpjs/gulp/blob/4.0/docs/API.md#gulpregistryregistry
[alchemist project]: https://github.com/webdesserts/alchemist-js
[index.js]: /index.js
