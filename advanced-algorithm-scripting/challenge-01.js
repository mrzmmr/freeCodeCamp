/**
 * Validate US Telephone Numbers
 *
 * Return true if the passed string is a valid US phone number. The user may
 * fill out the form field any way they choose as long as it is a valid US
 * number. The following are examples of valid formats for US numbers (refer to
 * the tests below for other variants):
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * For this challenge you will be presented with a string such as 800-692-7753
 * or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone
 * number based on any combination of the formats provided above. The area code
 * is required. If the country code is provided, you must confirm that the
 * country code is 1. Return true if the string is a valid US phone number;
 * otherwise return false.
 */

'use strict'

const tap = require('tap')

function telephoneCheck(s) {
	/**
	 * Regex
	 *
	 * ^(1\s?)?          Only match if s begins with a 1 and possibly a space
	 * (\(\d{3}\)|\d{3}) Followed by either parens and 3 digits or three digits
	 * (\s|-)?           Followed by either a space or dash
	 * \d{3}             Followed by 3 digits
	 * (\s|-)?           Followed by either a space or dash
	 * \d{4}             Followed by 4 digits
	 * $                 Anchor. Only return true if whole string is a match
	 */
	return /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g.test(s)
}

tap.test('Validate US Telephone Numbers', t => {
	t.is(telephoneCheck('1 555-555-5555'), true)
	t.is(telephoneCheck('1 (555) 555-5555'), true)
	t.is(telephoneCheck('5555555555'), true)
	t.is(telephoneCheck('555-555-5555'), true)
	t.is(telephoneCheck('(555)555-5555'), true)
	t.is(telephoneCheck('1(555)555-5555'), true)
	t.is(telephoneCheck('555-5555'), false)
	t.is(telephoneCheck('5555555'), false)
	t.is(telephoneCheck('1 555)555-5555'), false)
	t.is(telephoneCheck('1 555 555 5555'), true)
	t.is(telephoneCheck('1 456 789 4444'), true)
	t.is(telephoneCheck('123**&!!asdf#'), false)
	t.is(telephoneCheck('55555555'), false)
	t.is(telephoneCheck('(6505552368)'), false)
	t.is(telephoneCheck('2 (757) 622-7382'), false)
	t.is(telephoneCheck('0 (757) 622-7382'), false)
	t.is(telephoneCheck('-1 (757) 622-7382'), false)
	t.is(telephoneCheck('2 757 622-7382'), false)
	t.is(telephoneCheck('10 (757) 622-7382'), false)
	t.is(telephoneCheck('27576227382'), false)
	t.is(telephoneCheck('(275)76227382'), false)
	t.is(telephoneCheck('2(757)6227382'), false)
	t.is(telephoneCheck('2(757)622-7382'), false)
	t.is(telephoneCheck('555)-555-5555'), false)
	t.is(telephoneCheck('(555-555-5555'), false)
	t.is(telephoneCheck('(555)5(55?)-5555'), false)
	t.end()
})
