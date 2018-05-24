'use strict'

/**
 * Sorted Union
 */

const tap = require('tap')

function uniteUnique(...args) {
	const ret = [].concat(...args)

	return ret.filter((v, i, s) => {
		return s.indexOf(v) === i
	})
}

tap.test('Sorted Union', t => {
	t.same(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4])
	t.same(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]])
	t.same(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5])
	t.same(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [
		1,
		2,
		3,
		5,
		4,
		6,
		7,
		8
	])
	t.end()
})
