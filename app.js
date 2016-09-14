var major_modes = require('./definitions/scales/major_modes');
var harmonic_modes = require('./definitions/scales/harmonic_modes');
var tetrads = require('./definitions/chords/tetrads');
var triads = require('./definitions/chords/triads');

function *keys() {
	const ALL = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B']; 
	var i = 0;
	while(i < ALL.length) {
		yield ALL[i];
		i++;
	}
}

var itr = keys();

console.log(harmonic_modes.harmonicMinor("C"))