# posthtml-color-shorthand-hex-to-six-digit

<a href="https://github.com/posthtml/posthtml" target="_blank"><img align="right" height="100" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg"></a>
<a href="https://standardjs.com" style="float: right; padding: 0 20px 20px;" target="_blank"><img src="https://cdn.rawgit.com/feross/standard/master/sticker.svg" alt="Standard JavaScript" width="100" align="right"></a>

> Enforce full-length hex colour codes using PostHTML. #abc => #aabbcc

[![Build Status][travis-img]][travis-url]
[![Coverage Status][cov-img]][cov-url]
[![bitHound Overall Score][overall-img]][overall-url]
[![bitHound Dependencies][deps-img]][deps-url]
[![bitHound Dev Dependencies][dev-img]][dev-url]
[![Known Vulnerabilities][vulnerabilities-img]][vulnerabilities-url]
[![Downloads/Month][downloads-img]][downloads-url]

* It's driven by the library: [color-shorthand-hex-to-six-digit](https://github.com/codsen/color-shorthand-hex-to-six-digit).

<span style="color: red;">IMPORTANT. If you are using XHTML and closing slashes on singleton tags (`img`, `br` and others) are important for you, <bold>don't use this plugin</bold>. Use its API [color-shorthand-hex-to-six-digit](https://github.com/codsen/color-shorthand-hex-to-six-digit) directly.</span>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [posthtml-color-shorthand-hex-to-six-digit](#posthtml-color-shorthand-hex-to-six-digit)
  - [Install](#install)
  - [Purpose](#purpose)
  - [Usage, using `fs`](#usage-using-fs)
  - [Usage, using Gulp](#usage-using-gulp)
  - [Contributing](#contributing)
  - [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```bash
$ npm i posthtml-color-shorthand-hex-to-six-digit --save-dev
```

## Purpose

This PostHTML plugin is aimed at email template developers. Certain email software will not render HTML shorthand hex color codes (like `#ccc`) within tag attributes. Instead, you have to put full-length hex codes (like `#cccccc`). This library will automatically convert any shorthand hex color codes into full-length, and as a bonus, will convert any uppercase letters within hex color codes into lowercase.

Just add `posthtml-color-shorthand-hex-to-six-digit` onto your PostHTML plugins list.

## Usage, using `fs`

```js
const fs = require('fs');
const posthtml = require('posthtml');
const convertHex = require('posthtml-color-shorthand-hex-to-six-digit');

posthtml()
.use(convertHex())
.process(html/*, options */)
.then(result => fs.writeFileSync('./after.html', result.html));
```

## Usage, using Gulp

```bash
$ npm i -D gulp
$ npm i -D gulp-posthtml
$ npm i -D posthtml-color-shorthand-hex-to-six-digit
```

```js
gulp.task('build', function() {
  var plugins = [
    require('posthtml-color-shorthand-hex-to-six-digit')()
  ];
  return gulp.src('./build/**/*.html')
    .pipe(posthtml(plugins))
    .pipe(gulp.dest('./dist'));
})
```

## Contributing

All contributions are welcome. Please stick to [Standard JavaScript](https://standardjs.com) notation and supplement the `test.js` with new unit tests covering your feature(s).

If you see anything incorrect whatsoever, do [raise an issue](https://github.com/codsen/color-shorthand-hex-to-six-digit) on the core library.

## Licence

> MIT License (MIT)

> Copyright (c) 2017 Codsen Ltd, Roy Revelt

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[travis-img]: https://travis-ci.org/posthtml/posthtml-color-shorthand-hex-to-six-digit.svg?branch=master
[travis-url]: https://travis-ci.org/posthtml/posthtml-color-shorthand-hex-to-six-digit

[cov-img]: https://coveralls.io/repos/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/badge.svg?branch=master
[cov-url]: https://coveralls.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit?branch=master

[overall-img]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/badges/score.svg
[overall-url]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit

[deps-img]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/badges/dependencies.svg
[deps-url]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/master/dependencies/npm

[dev-img]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/badges/devDependencies.svg
[dev-url]: https://www.bithound.io/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/master/dependencies/npm

[downloads-img]: https://img.shields.io/npm/dm/posthtml-color-shorthand-hex-to-six-digit.svg
[downloads-url]: https://www.npmjs.com/package/posthtml-color-shorthand-hex-to-six-digit

[vulnerabilities-img]: https://snyk.io/test/github/posthtml/posthtml-color-shorthand-hex-to-six-digit/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/posthtml/posthtml-color-shorthand-hex-to-six-digit
