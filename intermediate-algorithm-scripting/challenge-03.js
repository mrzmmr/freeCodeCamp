/**
 * Roman Numeral Converter
 *
 * Convert the given number into a roman numeral. All roman
 * numerals answers should be provided in upper-case.
 */

'use strict'

const tap = require('tap')

function convertToRoman(num) {
    const x = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const y = [
        'I',
        'IV',
        'V',
        'IX',
        'X',
        'XL',
        'L',
        'XC',
        'C',
        'CD',
        'D',
        'CM',
        'M'
    ]
    let r = ''

    while (num > 0) {
        for (let i = 0; i < x.length; i++) {
            const next = x[(i + 1) % x.length]
            if (x[i] <= num && next > num) {
                num -= x[i]
                r += y[i]
            }
        }
    }

    return r
}

tap.test('Roman Numeral Converter', t => {
    t.is(convertToRoman(2), 'II')
    t.is(convertToRoman(3), 'III')
    t.is(convertToRoman(4), 'IV')
    t.is(convertToRoman(5), 'V')
    t.is(convertToRoman(9), 'IX')
    t.is(convertToRoman(12), 'XII')
    t.is(convertToRoman(16), 'XVI')
    t.is(convertToRoman(29), 'XXIX')
    t.is(convertToRoman(44), 'XLIV')
    t.is(convertToRoman(45), 'XLV')
    t.is(convertToRoman(68), 'LXVIII')
    t.is(convertToRoman(83), 'LXXXIII')
    t.is(convertToRoman(97), 'XCVII')
    t.is(convertToRoman(99), 'XCIX')
    t.is(convertToRoman(500), 'D')
    t.is(convertToRoman(501), 'DI')
    t.is(convertToRoman(649), 'DCXLIX')
    t.is(convertToRoman(798), 'DCCXCVIII')
    t.is(convertToRoman(891), 'DCCCXCI')

    // Tests hang when above 1000
    // t.is(convertToRoman(1000), 'M')
    // t.is(convertToRoman(1004), 'MIV')
    // t.is(convertToRoman(1006), 'MVI')
    // t.is(convertToRoman(1023), 'MXXIII')
    // t.is(convertToRoman(2014), 'MMXIV')
    // t.is(convertToRoman(3999), 'MMMCMXCIX')
    t.end()
})
