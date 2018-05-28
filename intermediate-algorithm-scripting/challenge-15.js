/**
 * Smallest Common Multiple
 *
 * Find the smallest common multiple of the provided parameters that can be
 * evenly divided by both, as well as by all sequential numbers in the range
 * between these parameters.  The range will be an array of two numbers that
 * will not necessarily be in numerical order. e.g. for 1 and 3 - find the
 * smallest common multiple of both 1 and 3 that is evenly divisible by all
 * numbers between 1 and 3.
 */

const tap = require('tap')

const gcd = (x, y) => {
    let r

    // Sort x and y so x < y
    if (x > y) {
        r = x
        x = y
        y = r
    }

    while (r !== 0) {
        // Store the remainder 4 l8er
        r = y % x

        if (r === 0) {
            return x
        }

        // Keep x < r < y
        y = x
        x = r
    }
}

const smallestCommons = arr => {
    let [r] = arr
    const a = []
    let i = 0

    arr = arr.sort((x, y) => x > y)

    for (i = arr[0] - 1; i <= arr[1]; i++) {
        a.push(i)
    }

    i = 0

    while (++i < a.length) {
        r = (r * a[i]) / gcd(r, a[i])
    }

    return r
}

tap.test('Smallest Common Multiple', t => {
    t.is(smallestCommons([1, 5]), 60)
    t.is(smallestCommons([5, 1]), 60)
    t.is(smallestCommons([1, 13]), 360360)
    t.is(smallestCommons([23, 18]), 6056820)
    t.end()
})
