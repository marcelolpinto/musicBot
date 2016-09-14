var addInterval = require('../../actions/add_interval');
var renderScale = require('../../actions/render_scale');

module.exports = {
	ionian: function(root) {
		const intervals = ["J1","M2","M3","J4","J5","M6","M7"]
		return renderScale(root, intervals);
	},
	dorian: function(root) {
		const intervals = ["J1","M2","m3","J4","J5","M6","m7"];
		return renderScale(root, intervals);
	},
	phyrgian: function(root) {	
		const intervals = ["J1","m2","m3","J4","J5","m6","m7"];
		return renderScale(root, intervals);
	},
	lydian: function(root) {	
		const intervals = ["J1","M2","M3","aug4","J5","M6","M7"];
		return renderScale(root, intervals);
	},
	mixolydian: function(root) {	
		const intervals = ["J1","M2","M3","J4","J5","M6","m7"];
		return renderScale(root, intervals);
	},
	aeolian: function(root) {
		const intervals = ["J1","M2","m3","J4","J5","m6","m7"];
		return renderScale(root, intervals);
	},
	locrian: function(root) {
		const intervals = ["J1","m2","m3","J4","dim5","m6","m7"];
		return renderScale(root, intervals);
	}
}