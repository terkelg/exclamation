'use strict';

const test = require('tape');
const exclamations = require('../src');

test('standard', t => {
    t.plan(1);
    t.equal(typeof exclamations, 'object', 'exlamations return object');
});

test('random', t => {
    t.plan(3);
    t.equal(typeof exclamations.random, 'function', 'random is a function')
    t.equal(typeof exclamations.random(), 'string', 'random returns a string');
    t.equal(exclamations.random().includes('Holy'), true, 'String contains "Holy"');
});

test('all', t => {
    t.plan(2);
    t.true(Array.isArray(exclamations.all), 'is array');
    t.true(exclamations.all.length > 0, 'is not empty');
});


test('exclamations', t => {
    let count = 0;
    exclamations.all.forEach(e => e.startsWith('Holy') && count++)
    t.equal(count, exclamations.all.length, 'all exclamations starts with "Holy"');
    t.end()
});
