/**
 * Convert HTML Entities
 */

const tap = require('tap')

function convertHtml(str) {
	const commonHtmlEntities = {
		'©': '&copy;',
		'®': '&reg;',
		"'": '&apos;',
		'"': '&quot;',
		'#': '&num;',
		$: '&dollar;',
		'%': '&percent;',
		'&': '&amp;',
		'(': '&lpar;',
		')': '&rpar;',
		'*': '&ast;',
		'+': '&plus;',
		',': '&comma;',
		'.': '&period;',
		'/': '&sol;',
		':': '&colon;',
		';': '&semi;',
		'<': '&lt;',
		'>': '&gt;',
		'•': '&bull;',
		'·': '&middot;',
		'⋅': '&sdot;',
		'–': '&ndash;',
		'—': '&mdash;',
		'¢': '&cent;',
		'£': '&pound;',
		'€': '&euro;',
		'≠': '&ne;',
		'™': '&trade;',
		'!': '&excl;'
	}

	const keys = Object.keys(commonHtmlEntities)
	let ix

	return str
		.split('')
		.map(c => {
			ix = keys.indexOf(c)
			if (ix > -1) {
				return commonHtmlEntities[keys[ix]]
			}
			return c
		})
		.join('')
}

tap.test('Convert HTML Entities', t => {
	t.is(convertHtml('Dolce & Gabbana'), 'Dolce &amp; Gabbana')
	t.is(
		convertHtml('Hamburgers < Pizza < Tacos'),
		'Hamburgers &lt; Pizza &lt; Tacos'
	)
	t.is(convertHtml('Sixty > twelve'), 'Sixty &gt; twelve')
	t.is(
		convertHtml('Stuff in "quotation marks"'),
		'Stuff in &quot;quotation marks&quot;'
	)
	t.is(convertHtml("Shindler's List"), 'Shindler&apos;s List')
	t.is(convertHtml('<>'), '&lt;&gt;')
	t.is(convertHtml('abc'), 'abc')
	t.end()
})
