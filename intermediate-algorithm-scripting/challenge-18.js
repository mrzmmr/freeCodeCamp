/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

const tap = require('tap')

const steamrollArray = arr => {
	// Recurse through array and any sub arrays and store values in b
	const rec = (arr, b) => {
		if (Array.isArray(arr)) {
			for (let i = 0; i < arr.length; i++) {
				rec(arr[i], b)
			}
		} else {
			b.push(arr)
		}
		return b
	}

	return rec(arr, [])
}

tap.test('Steamroller', t => {
	t.same(steamrollArray([[['a']], [['b']]]), ['a', 'b'])
	t.same(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
	t.same(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4])
	t.same(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
	t.end()
})
