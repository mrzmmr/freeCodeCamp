/**
 * Sum All Odd Fibonacci Numbers
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers
 * that are less than or equal to num.
 */

const tap = require('tap')

function isOdd(n) {
	return !(n % 2 === 0)
}

function fibNums(n) {
	const stored = [0, 1]
	let current = 0

	for (let i = 2; current <= n; i++) {
		current = stored[i - 1] + stored[i - 2]
		if (current <= n) {
			stored[i] = current
		}
	}
	return stored
}

function sumFibs(n) {
	const nums = fibNums(n)
	return nums.reduce((accu, curr) => {
		accu += isOdd(curr) ? curr : 0
		return accu
	}, 0)
}

tap.test('Sum All Odd Fibonacci Numbers', t => {
	t.is(sumFibs(1000), 1785)
	t.is(sumFibs(4000000), 4613732)
	t.is(sumFibs(4), 5)
	t.is(sumFibs(75024), 60696)
	t.is(sumFibs(75025), 135721)
	t.end()
})
