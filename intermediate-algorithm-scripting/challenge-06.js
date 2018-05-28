/**
 * Pig Latin
 *
 * Translate the provided string to pig latin. Pig Latin takes the first
 * consonant (or consonant cluster) of an English word, moves it to the end of
 * the word and suffixes an "ay". If a word begins with a vowel you just add
 * "way"to the end. Input strings are guaranteed to be English words in all
 * lowercase.
 */

'use strict'

const tap = require('tap')

function translatePigLatin(str) {
    let found = []
    const consonants = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'x',
        'z',
        'w',
        'y'
    ]

    for (let i = 0; i < str.length; i++) {
        if (consonants.indexOf(str[i]) > -1) {
            found.push(str[i])
        } else {
            break
        }
    }

    found = found.join('')

    if (found.length === 0) {
        str += 'way'
        return str
    }

    str = str.slice(found.length)
    str += found + 'ay'

    return str
}

tap.test('Pig Latin', t => {
    t.is(translatePigLatin('california'), 'aliforniacay')
    t.is(translatePigLatin('paragraphs'), 'aragraphspay')
    t.is(translatePigLatin('glove'), 'oveglay')
    t.is(translatePigLatin('algorithm'), 'algorithmway')
    t.is(translatePigLatin('eight'), 'eightway')
    t.end()
})
