/**
 * Sum All Primes
 *
 * Sum all the prime numbers up to and including the provided number. A prime
 * number is defined as a number greater than one and having only two divisors,
 * one and itself. For example, 2 is a prime number because it's only divisible
 * by one and two. The provided number may not be a prime.
 */

const tap = require('tap')

const isPrime = n => {
	// Store sqrt since we only need to check up to
	// sqrt
	const sqrt = Math.sqrt(n)
	let i = 1

	if (n === 2) {
		return true
	}

	while (i++ <= sqrt) {
		// Check if n is evenly divisable by any number
		// other than one or its self.
		if (n % i === 0) {
			return false
		}
	}

	return true
}

const sumPrimes = n => {
	let r = 0

	for (let i = 2; i <= n; i++) {
		if (isPrime(i)) {
			r += i
		}
	}

	return r
}

tap.test('Sum All Primes', t => {
	t.is(sumPrimes(10), 17)
	t.is(sumPrimes(977), 73156)
	t.end()
})
