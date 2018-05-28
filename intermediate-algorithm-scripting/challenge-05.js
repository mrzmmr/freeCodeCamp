/**
 * Search and Replace
 *
 * Perform a search and replace on the sentence using the arguments provided and
 * return the new sentence. First argument is the sentence to perform the search
 * and replace on. Second argument is the word that you will be replacing
 * (before). Third argument is what you will be replacing the second argument
 * with (after).
 */

'use strict'

const tap = require('tap')

function myReplace(str, before, after) {
    const first = before.charAt(0)

    if (first === first.toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1)
    } else {
        after = after.charAt(0).toLowerCase() + after.slice(1)
    }

    return str.replace(before, after)
}

tap.test('Search and Replace', t => {
    t.is(
        'Let us go to the mall',
        myReplace('Let us go to the store', 'store', 'mall')
    )
    t.is(
        'He is Sitting on the couch',
        myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
    )
    t.is(
        'This has a spelling error',
        myReplace('This has a spellngi error', 'spellngi', 'spelling')
    )
    t.is('His name is John', myReplace('His name is Tom', 'Tom', 'john'))
    t.is(
        'Let us get back to more Algorithms',
        myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
    )
    t.end()
})
