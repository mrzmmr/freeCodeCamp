/**
 * Finders Keepers
 *
 * Create a function that looks through an array (first argument) and returns
 * the first element in the array that passes a truth test (second argument).
 */

const tap = require('tap')

const findElement = (arr, callback) => {
    let r

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            r = arr[i]
            break
        }
    }

    return r
}

tap.test('Finders Keepers', t => {
    t.is(
        findElement([1, 3, 5, 8, 9, 10], num => {
            return num % 2 === 0
        }),
        8
    )
    t.is(
        findElement([1, 3, 5, 9], num => {
            return num % 2 === 0
        }),
        undefined
    )
    t.end()
})
