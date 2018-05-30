/**
 * Record Collection
 *
 * You are given a JSON object representing a part of your musical album
 * collection. Each album has several properties and a unique id number as its
 * key. Not all albums have complete information. Write a function which takes
 * an album's id (like 2548), a property prop (like "artist" or "tracks"), and
 * a value (like "Addicted to Love") to modify the data in this collection. If
 * prop isn't "tracks" and value isn't empty (""), update or set the value for
 * that record album's property. Your function must always return the entire
 * collection object. There are several rules for handling incomplete data:
 *
 * If prop is "tracks" but the album doesn't have a "tracks" property, create
 * an empty array before adding the new value to the album's corresponding
 * property.
 *
 * If prop is "tracks" and value isn't empty (""), push the value onto the end
 * of the album's existing tracks array.
 *
 * If value is empty (""), delete the given prop property from the album.
 */

'use strict'

const tap = require('tap')

const collection = {
    2548: {
        album: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        album: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        album: 'ABBA Gold'
    }
}

const updateRecords = (id, prop, value, collection) => {
    const copy = JSON.parse(JSON.stringify(collection))

    if (value.length > 0) {
        if (prop === 'tracks') {
            if (Array.isArray(copy[id][prop])) {
                copy[id][prop].push(value)
            } else {
                copy[id][prop] = [value]
            }
        } else {
            copy[id][prop] = value
        }
    } else if (prop === 'tracks') {
        copy[id][prop] = []
    } else {
        delete copy[id][prop]
    }

    return copy
}

const tests = [
    {
        name: 'artist should be "ABBA"',
        params: [5439, 'artist', 'ABBA', collection],
        test: (t, actual) => {
            t.ok(actual[5439].artist === 'ABBA')
        }
    },
    {
        name: 'tracks should have "Take a Chance on Me" as the last element',
        params: [5439, 'tracks', 'Take a Chance on Me', collection],
        test: (t, actual) => {
            const { tracks } = actual[5439]
            t.ok(tracks.indexOf('Take a Chance on Me') === tracks.length - 1)
        }
    },
    {
        name: 'artist should not be set',
        params: [2548, 'artist', '', collection],
        test: (t, actual) => {
            t.ok(Object.keys(actual).indexOf('artist') < 0)
        }
    },
    {
        name: 'tracks should have "Addicted to Love" as the last element',
        params: [1245, 'tracks', 'Addicted to Love', collection],
        test: (t, actual) => {
            const { tracks } = actual[1245]
            t.ok(tracks.indexOf('Addicted to Love') === tracks.length - 1)
        }
    },
    {
        name: 'tracks should have "1999" as the first element',
        params: [2468, 'tracks', 'Free', collection],
        test: (t, actual) => {
            const { tracks } = actual[2468]
            t.ok(tracks.indexOf('1999') === 0)
        }
    },
    {
        name: 'tracks should not be set',
        params: [2548, 'tracks', '', collection],
        test: (t, actual) => {
            t.ok(Object.keys(actual).indexOf('tracks') < 0)
        }
    }
]

tests.forEach(test => {
    tap.test(test.name, t => {
        const actual = updateRecords(...test.params)
        test.test(t, actual)
        t.end()
    })
})
