# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.0] - 2017-08-09
### Updated
- Updated all dependencies.

### Changed
- I believe there is a problem with PostHTML settings, they don't get respected properly in Gulp PostHTML plugin. Now, I couldn't get assistance from the maintainers for, well, ever. I'm going to skip the test that checks closing slashes.

IMPORTANT. If you are using XHTML and closing slashes on singleton tags are important for you, don't use this plugin. Use [color-shorthand-hex-to-six-digit](https://github.com/codsen/color-shorthand-hex-to-six-digit) directly.

## 1.0.0 - 2017-01-09
### Added
- Updated to the latest core library, now enforcing all letters in all hex codes to be lowercase.

### Fixed
- Removed stale [mversion](https://github.com/codsen/mversion) dev-dependency which was inherited from the PostHTML plugin template.

[1.1.0]: https://github.com/codsen/posthtml-color-shorthand-hex-to-six-digit/compare/v1.0.0...v1.1.0
