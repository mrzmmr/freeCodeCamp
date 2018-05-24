/**
 * Sum All Numbers in a Range
 *
 * We'll pass you an array of two numbers. Return the sum of those two numbers
 * and all numbers between them. The lowest number will not always come first.
 */

const tap = require('tap')

function sumAll(arr) {
	// First sort the two numbers low to high.
	arr = arr.sort((x, y) => x > y)

	return (
		// Create a new array with all sequential numbers
		// up to arr[1]. Then remove any less than arr[0]
		// since we want numbers within a range.
		[...new Array(arr[1] + 1).keys()].slice(arr[0]).reduce((curr, accu) => {
			// Accumulate the sum.
			accu += curr
			return accu
		}, 0)
	)
}

tap.test('Sum All Numbers in a Range', t => {
	t.is(sumAll([1, 4]), 10)
	t.is(sumAll([4, 1]), 10)
	t.is(sumAll([5, 10]), 45)
	t.is(sumAll([10, 5]), 45)
	t.end()
})
