module.exports = 'ROCK IT!';
exports.name = function() {
    console.log('My name is Lemmy Kilmister');
};

// another file

var rocker = require('./exm.js');
exm.name();
