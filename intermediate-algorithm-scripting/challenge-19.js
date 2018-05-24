/**
 * Binary Agents
 *
 * Return an English translated sentence of the passed binary string. The
 * binary string will be space separated.
 */

const tap = require('tap')

const checkBit = b => b === '1'

// Returns the decimal of byte string b
const byteToDecimal = b => {
	// Assume its 8bit
	const decimal = [128, 64, 32, 16, 8, 4, 2, 1]

	return b.split('').reduce((accu, curr, i) => {
		if (checkBit(curr)) {
			accu += decimal[i]
		} else {
			accu += 0
		}
		return accu
	}, 0)
}

// Return Char from 8bit
const byteToChar = b => String.fromCharCode(byteToDecimal(b))

// Convert string b, a space seperated string of bytes(0||1) to string
const binaryAgent = b => {
	return b.split(' ').reduce((accu, curr) => {
		accu += byteToChar(curr)
		return accu
	}, '')
}

tap.test('Binary Agent', t => {
	t.is(
		binaryAgent(
			'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
		),
		"Aren't bonfires fun!?"
	)
	t.is(
		binaryAgent(
			'01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001'
		),
		'I love FreeCodeCamp!'
	)
	t.end()
})
