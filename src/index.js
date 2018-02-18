const exclamations = require('./exclamations.json');
exports.all = exclamations;
exports.random = () => exclamations[Math.floor(Math.random() * exclamations.length)];
