/**
 * Where art thou
 *
 * Make a function that looks through an array of objects (first argument) and
 * returns an array of all objects that have matching property and value pairs
 * (second argument). Each property and value pair of the source object has to
 * be present in the object from the collection if it is to be included in the
 * returned array.
 */

'use strict'

const tap = require('tap')

// Looks through an array of objects and returns an array of
// all objects that have matching property and value * pairs.
function whatIsInAName(collection, source) {
	const sourceKeys = Object.keys(source)
	let hasKey
	let k

	return collection.filter(object => {
		for (let i = 0; i < sourceKeys.length; i++) {
			k = sourceKeys[i]
			hasKey = Object.hasOwnProperty.call(object, k)

			if (!hasKey || object[k] !== source[k]) {
				return false
			}
		}
		return true
	})
}

tap.test('test', t => {
	t.same(
		whatIsInAName(
			[
				{first: 'Romeo', last: 'Montague'},
				{first: 'Mercutio', last: null},
				{first: 'Tybalt', last: 'Capulet'}
			],
			{last: 'Capulet'}
		),
		[{first: 'Tybalt', last: 'Capulet'}]
	)

	t.same(whatIsInAName([{a: 1}, {a: 1}, {a: 1, b: 2}], {a: 1}), [
		{a: 1},
		{a: 1},
		{a: 1, b: 2}
	])
	t.same(
		whatIsInAName([{a: 1, b: 2}, {a: 1}, {a: 1, b: 2, c: 2}], {a: 1, b: 2}),
		[{a: 1, b: 2}, {a: 1, b: 2, c: 2}]
	)
	t.same(
		whatIsInAName([{a: 1, b: 2}, {a: 1}, {a: 1, b: 2, c: 2}], {a: 1, b: 2}),
		[{a: 1, b: 2}, {a: 1, b: 2, c: 2}]
	)
	t.same(
		whatIsInAName([{a: 1, b: 2}, {a: 1}, {a: 1, b: 2, c: 2}], {a: 1, c: 2}),
		[{a: 1, b: 2, c: 2}]
	)

	t.end()
})
