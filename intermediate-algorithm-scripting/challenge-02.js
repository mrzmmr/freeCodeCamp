/**
 * Diff Two Arrays
 * Compare two arrays and return a new array with any items only found in one
 * of the two given arrays, but not both. In other words, return the symmetric
 * difference of the two arrays.
 */

'use strict'

const tap = require('tap')

function diffArray(arr1, arr2) {
    return arr1.concat(arr2).filter(n => {
        if (arr1.indexOf(n) < 0 || arr2.indexOf(n) < 0) {
            return true
        }
        return false
    })
}

// Tests will fail if array has items in different orders
// even if they are the same. Sort will sort alphabetically
function sort(array) {
    let a
    let b
    return array.sort((x, y) => {
        if (typeof x === 'string') {
            a = x.charAt(0)
        }
        if (typeof y === 'string') {
            b = y.charAt(0)
        }

        return a > b
    })
}

tap.test('Diff Two Arrays', t => {
    t.same(
        sort(
            diffArray(
                [
                    'diorite',
                    'andesite',
                    'grass',
                    'dirt',
                    'pink wool',
                    'dead shrub'
                ],
                ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
            )
        ),
        sort(['pink wool'])
    )

    t.same(
        sort(
            diffArray(
                ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
                ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
            )
        ),
        sort(['diorite', 'pink wool'])
    )

    t.same(
        sort(
            diffArray(
                ['andesite', 'grass', 'dirt', 'dead shrub'],
                ['andesite', 'grass', 'dirt', 'dead shrub']
            )
        ),
        []
    )

    t.same(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4])

    t.same(
        sort(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])),
        sort(['piglet', 4])
    )

    t.same(
        sort(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo'])),
        sort(['snuffleupagus', 'cookie monster', 'elmo'])
    )

    t.same(
        sort(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly'])),
        sort([1, 'calf', 3, 'piglet', 7, 'filly'])
    )
    t.end()
})
