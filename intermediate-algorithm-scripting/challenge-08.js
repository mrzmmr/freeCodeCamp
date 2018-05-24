/**
 * Missing letters
 *
 * Find the missing letter in the passed letter range and return it and stop.
 * If all letters are present in the range, then return undefined.
 */

const tap = require('tap')

function fearNotLetter(str) {
	const start = str.charCodeAt(0)
	let missing

	for (let i = 1; i < str.length; i++) {
		if (str[i].charCodeAt(0) !== start + i) {
			missing = String.fromCharCode(start + i)
			break
		}
	}

	return missing
}

tap.test('Missing letters', t => {
	t.is(fearNotLetter('abce'), 'd')
	t.is(fearNotLetter('abcdefghjklmno'), 'i')
	t.is(fearNotLetter('bcd'), undefined)
	t.is(fearNotLetter('yz'), undefined)
	t.end()
})
