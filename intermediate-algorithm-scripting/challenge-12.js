/*
 * Spinal Tap Case
 */

const tap = require('tap')

function spinalCase(s) {
    // Matches all lowercaseUppercase and saves the
    // match found
    const reg = /([a-z])([A-Z])/g
    s = s.replace(reg, '$1 $2').toLowerCase()
    s = s.replace(/\s|_/g, '-')

    return s
}

tap.test('Spinal Tap Case', t => {
    t.is(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap')
    t.is(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap')
    t.is(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show')
    t.is(spinalCase('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh')
    t.is(spinalCase('AllThe-small Things'), 'all-the-small-things')
    t.end()
})
