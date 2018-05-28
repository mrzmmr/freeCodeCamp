/**
 * Boo who
 *
 * Check if a value is classified as a boolean primitive. Return true or false.
 * Boolean primitives are true and false.
 */

const tap = require('tap')

function booWho(bool) {
    return typeof bool === 'boolean'
}

tap.test('Boo who', t => {
    t.ok(booWho(true) === true)
    t.ok(booWho(false) === true)
    t.ok(booWho([1, 2, 3]) === false)
    t.ok(booWho([].slice) === false)
    t.ok(booWho({ a: 1 }) === false)
    t.ok(booWho(1) === false)
    t.ok(booWho(NaN) === false)
    t.ok(booWho('a') === false)
    t.ok(booWho('true') === false)
    t.ok(booWho('false') === false)
    t.end()
})
