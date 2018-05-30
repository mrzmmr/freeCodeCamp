/**
 * Design a cash register drawer function checkCashRegister() that accepts
 * purchase price as the first argument (price), payment as the second argument
 * (cash), and cash-in-drawer (cid) as the third argument. cid is a 2D array
 * listing available currency.Return the string "Insufficient Funds" if
 * cash-in-drawer is less than the change due. Return the string "Closed" if
 * cash-in-drawer is equal to the change due. Otherwise, return change in coin
 * and bills, sorted in highest to lowest order.
 */

'use strict'

const tap = require('tap')

const round = n => Math.round(n * Math.pow(10, 2)) / Math.pow(10, 2)
const totalCid = cid =>
    cid.reduce((a, c) => {
        a += c[1]
        return a
    }, 0)

const checkCashRegister = (price, cash, cid) => {
    let change = round(cash - price)
    const total = round(totalCid(cid))
    const returns = []
    const denoms = {
        'ONE HUNDRED': 100.0,
        TWENTY: 20.0,
        TEN: 10.0,
        FIVE: 5.0,
        ONE: 1.0,
        QUARTER: 0.25,
        DIME: 0.1,
        NICKEL: 0.05,
        PENNY: 0.01
    }

    if (change > total) {
        return 'Insufficient Funds'
    }

    if (total === change) {
        return 'Closed'
    }

    let i = cid.length
    while (--i >= 0) {
        const denom = cid[i]
        const dec = denoms[denom[0]]
        let tot = denom[1]
        const c = [denom[0], 0]

        while (dec <= change && dec <= tot) {
            change = round(change - dec)
            tot = round(tot - dec)
            c[1] += dec
            /*
			Change -= dec
			tot -= dec
			c[1] += dec
			*/
        }

        if (c[1] > 0) {
            c[1] = round(c[1])
            returns.push(c)
        }
    }

    if (change > 0) {
        return 'Insufficient Funds'
    }

    return returns
}

tap.test('Exact Change', t => {
    const tests = [
        {
            name: 'should return [["QUARTER", 0.50]].',
            param: [
                19.5,
                20.0,
                [
                    ['PENNY', 1.01],
                    ['NICKEL', 2.05],
                    ['DIME', 3.1],
                    ['QUARTER', 4.25],
                    ['ONE', 90.0],
                    ['FIVE', 55.0],
                    ['TEN', 20.0],
                    ['TWENTY', 60.0],
                    ['ONE HUNDRED', 100.0]
                ]
            ],
            expected: [['QUARTER', 0.5]]
        },
        {
            name:
                'should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]',
            param: [
                3.26,
                100.0,
                [
                    ['PENNY', 1.01],
                    ['NICKEL', 2.05],
                    ['DIME', 3.1],
                    ['QUARTER', 4.25],
                    ['ONE', 90.0],
                    ['FIVE', 55.0],
                    ['TEN', 20.0],
                    ['TWENTY', 60.0],
                    ['ONE HUNDRED', 100.0]
                ]
            ],
            expected: [
                ['TWENTY', 60.0],
                ['TEN', 20.0],
                ['FIVE', 15.0],
                ['ONE', 1.0],
                ['QUARTER', 0.5],
                ['DIME', 0.2],
                ['PENNY', 0.04]
            ]
        },
        {
            name: 'should return "Insufficient Funds".',
            param: [
                19.5,
                20.0,
                [
                    ['PENNY', 0.01],
                    ['NICKEL', 0],
                    ['DIME', 0],
                    ['QUARTER', 0],
                    ['ONE', 0],
                    ['FIVE', 0],
                    ['TEN', 0],
                    ['TWENTY', 0],
                    ['ONE HUNDRED', 0]
                ]
            ],
            expected: 'Insufficient Funds'
        },
        {
            name: 'should return "Insufficient Funds".',
            param: [
                19.5,
                20.0,
                [
                    ['PENNY', 0.01],
                    ['NICKEL', 0],
                    ['DIME', 0],
                    ['QUARTER', 0],
                    ['ONE', 1.0],
                    ['FIVE', 0],
                    ['TEN', 0],
                    ['TWENTY', 0],
                    ['ONE HUNDRED', 0]
                ]
            ],
            expected: 'Insufficient Funds'
        },
        {
            name: 'should return "Closed".',
            param: [
                19.5,
                20.0,
                [
                    ['PENNY', 0.5],
                    ['NICKEL', 0],
                    ['DIME', 0],
                    ['QUARTER', 0],
                    ['ONE', 0],
                    ['FIVE', 0],
                    ['TEN', 0],
                    ['TWENTY', 0],
                    ['ONE HUNDRED', 0]
                ]
            ],
            expected: 'Closed'
        }
    ]

    tests.forEach(test => {
        if (Array.isArray(test.expected)) {
            t.same(checkCashRegister(...test.param), test.expected)
        } else {
            t.is(checkCashRegister(...test.param), test.expected)
        }
    })
    t.end()
})
