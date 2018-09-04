'use strict'

const test = require('ava')
const plugin = require('..')
const {readFileSync} = require('fs')
const path = require('path')
const posthtml = require('posthtml')
const fixtures = path.join(__dirname, 'fixtures')

function compare (t, name, opts) {
  const html = readFileSync(path.join(fixtures, `${name}.html`), 'utf8')
  const expected = readFileSync(path.join(fixtures, `${name}.expected.html`), 'utf8')
  return posthtml([plugin()])
    .process(html, opts)
    .then((res) => t.deepEqual(res.html, expected))
}

test('converts all shorthand color hex codes and doesn\'t touch full ones', (t) => {
  return compare(t, 'converts', {})
})

test('copes with an empty HTML file', (t) => {
  return compare(t, 'empty', {})
})

test.skip('respects XHTML files and doesn\'t remove closing slashes', (t) => {
  return compare(t, 'xhtml', { closingSingleTag: 'slash' })
})
