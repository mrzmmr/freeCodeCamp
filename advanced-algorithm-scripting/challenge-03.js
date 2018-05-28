/**
 * Create a function that takes two or more arrays and returns an array of the
 * symmetric difference (△ or ⊕) of the provided arrays.  Given two sets (for
 * example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term
 * "symmetric difference" of two sets is the set of elements which are in either
 * of the two sets, but not in both (A △ B = C = {1, 4}). For every additional
 * symmetric difference you take (say on a set D = {2, 3}), you should get the
 * set with elements which are in either of the two the sets but not both.
 * (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

'use strict'

const tap = require('tap')

const uniq = a => a.filter((n, i, s) => s.indexOf(n) === i)

const xor = (x, y) => (x || y) && !(x && y)

const sort = a => a.sort((x, y) => x > y)

const sym = (...args) => {
    return sort(
        args.reduce((a, c) => {
            return uniq(a.concat(c)).filter(n => {
                if (xor(a.indexOf(n) > -1, c.indexOf(n) > -1)) {
                    return true
                }
                return false
            })
        }, [])
    )
}

const tests = [
    {
        name: '01',
        params: [[1, 2, 3], [5, 2, 1, 4]],
        expected: [3, 4, 5]
    },
    {
        name: '02',
        params: [[1, 2, 5], [2, 3, 5], [3, 4, 5]],
        expected: [1, 4, 5]
    },
    {
        name: '03',
        params: [[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]],
        expected: [1, 4, 5]
    },
    {
        name: '04',
        params: [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]],
        expected: [2, 3, 4, 6, 7]
    },
    {
        name: '05',
        params: [
            [3, 3, 3, 2, 5],
            [2, 1, 5, 7],
            [3, 4, 6, 6],
            [1, 2, 3],
            [5, 3, 9, 8],
            [1]
        ],
        expected: [1, 2, 4, 5, 6, 7, 8, 9]
    }
]

tap.test('Symetric Difference', t => {
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i]

        t.same(sym(...test.params), test.expected, test.name)
    }
    t.end()
})
