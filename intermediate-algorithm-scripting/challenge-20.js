/**
 * Check if the predicate (second argument) is truthy on all elements of a
 * collection (first argument). Remember, you can access object properties
 * through either dot notation or [] notation.
 */

'use strict'

const tap = require('tap')

function truthCheck(collection, pre) {
    let r = true

    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            r = false
            break
        }
    }

    return r
}

tap.test('Everything Be True', t => {
    t.ok(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male' },
                { user: 'Dipsy', sex: 'male' },
                { user: 'Laa-Laa', sex: 'female' },
                { user: 'Po', sex: 'female' }
            ],
            'sex'
        )
    )
    t.notOk(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male' },
                { user: 'Dipsy' },
                { user: 'Laa-Laa', sex: 'female' },
                { user: 'Po', sex: 'female' }
            ],
            'sex'
        )
    )
    t.notOk(
        truthCheck(
            [
                { user: 'Tinky-Winky', sex: 'male', age: 0 },
                { user: 'Dipsy', sex: 'male', age: 3 },
                { user: 'Laa-Laa', sex: 'female', age: 5 },
                { user: 'Po', sex: 'female', age: 4 }
            ],
            'age'
        )
    )
    t.notOk(
        truthCheck(
            [
                { name: 'Pete', onBoat: true },
                { name: 'Repeat', onBoat: true },
                { name: 'FastFoward', onBoat: null }
            ],
            'onBoat'
        )
    )
    t.ok(
        truthCheck(
            [
                { name: 'Pete', onBoat: true },
                { name: 'Repeat', onBoat: true, alias: 'Repete' },
                { name: 'FastFoward', onBoat: true }
            ],
            'onBoat'
        )
    )
    t.ok(truthCheck([{ single: 'yes' }], 'single'))
    t.notOk(truthCheck([{ single: '' }, { single: 'double' }], 'single'))
    t.notOk(truthCheck([{ single: 'double' }, { single: undefined }], 'single'))
    t.notOk(truthCheck([{ single: 'double' }, { single: NaN }], 'single'))
    t.end()
})
