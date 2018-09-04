'use strict'
var colorHexConvert = require('color-shorthand-hex-to-six-digit')

module.exports = function () {
  return function removeUnusedCss (tree) {
    tree = colorHexConvert(tree)
    return tree
  }
}
