/**
 * DNA Pairing
 *
 * The DNA strand is missing the pairing element. Take each character, get its
 * pair, and return the results as a 2d array. Base pairs are a pair of AT and
 * CG. Match the missing element to the provided character.  Return the
 * provided character as the first element in each array.  For example, for the
 * input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 */

'use strict'

const tap = require('tap')

function pairElement(str) {
	const results = []
	const elements = str.split('')

	for (let i = 0; i < elements.length; i++) {
		switch (elements[i]) {
			case 'G':
				results.push(['G', 'C'])
				break
			case 'C':
				results.push(['C', 'G'])
				break
			case 'A':
				results.push(['A', 'T'])
				break
			case 'T':
				results.push(['T', 'A'])
				break
			default:
				continue
		}
	}
	return results
}

tap.test('DNA Pairing', t => {
	t.same(pairElement('ATCGA'), [
		['A', 'T'],
		['T', 'A'],
		['C', 'G'],
		['G', 'C'],
		['A', 'T']
	])
	t.same(pairElement('TTGAG'), [
		['T', 'A'],
		['T', 'A'],
		['G', 'C'],
		['A', 'T'],
		['G', 'C']
	])
	t.same(pairElement('CTCTA'), [
		['C', 'G'],
		['T', 'A'],
		['C', 'G'],
		['T', 'A'],
		['A', 'T']
	])
	t.end()
})
