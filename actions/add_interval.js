const nd = require('../definitions/notes_diatonic');
const i = require('../definitions/intervals');

// note: String, interval: String
module.exports = function addInterval(note, interval) {
	const name = note.slice(0,1);
	const suffix = note.slice(1,note.length);
	var compensate = 0;
	switch(suffix) {
		case 'b': compensate = 1; break;
		case 'bb': compensate = 2; break;
		case '#': compensate = -1; break;
		case '##': compensate = -2; break;
		default: break;
	}
	const position = nd.notes.indexOf(name);
	const target_name = nd.notes[(nd.notes.indexOf(name) + (i[interval].quality - 1))%7];
	var diff = (nd.values[nd.notes.indexOf(target_name)] - nd.values[nd.notes.indexOf(name)])%12;
	if(diff < 0) diff = diff + 12;
	var target_suffix = '';
	switch(diff + compensate - i[interval].steps) {
		case 1: target_suffix = 'b'; break;
		case 2: target_suffix = 'bb'; break;
		case -1: target_suffix = '#'; break;
		case -2: target_suffix = '##'; break;
		default: break;
	}
	return `${target_name}${target_suffix}`;
}