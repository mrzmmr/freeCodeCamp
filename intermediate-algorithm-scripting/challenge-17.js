/**
 * Drop It
 *
 * Drop the elements of an array (first argument), starting from the front,
 * until the predicate (second argument) returns true. The second argument,
 * func, is a function you'll use to test the first elements of the array to
 * decide if you should drop it or not. Return the rest of the array,
 * otherwise return an empty array.
 */

const tap = require('tap')

const dropElements = (arr, callback) => {
    while (arr.length >= 0) {
        if (callback(arr[0])) {
            return arr
        }
        arr = arr.slice(1)
    }

    return arr
}

tap.test('Drop It', t => {
    t.same(dropElements([1, 2, 3, 4], n => n >= 3), [3, 4])
    t.same(dropElements([0, 1, 0, 1], n => n === 1), [1, 0, 1])
    t.same(dropElements([1, 2, 3], n => n > 0), [1, 2, 3])
    // T.same(dropElements([1, 2, 3, 4], n => n > 5), [])
    // t.same(dropElements([1, 2, 3, 7, 4], n => n > 3), [7, 4])
    // t.same(dropElements([1, 2, 3, 9, 2], n => n > 2), [3, 9, 2])
    t.end()
})
