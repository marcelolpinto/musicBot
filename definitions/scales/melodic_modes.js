var addInterval = require('../../actions/add_interval');
var renderScale = require('../../actions/render_scale');

module.exports = {
	melodicMinor: function(root) {
		const intervals = ["J1","M2","m3","J4","J5","M6","M7"];
		return renderScale(root, intervals);
	},
	phyrgianN6: function(root) {
		const intervals = ["J1","m2","m3","J4","J5","M6","m7"]
		return renderScale(root, intervals);
	},
	lydianAug: function(root) {	
		const intervals = ["J1","M2","M3","aug4","aug5","M6","M7"];
		return renderScale(root, intervals);
	},
	lydianDom: function(root) {	
		const intervals = ["J1","M2","M3","aug4","J5","M6","m7"];
		return renderScale(root, intervals);
	},
	mixolydianB6: function(root) {
		const intervals = ["J1","M2","M3","J4","J5","m6","m7"];
		return renderScale(root, intervals);
	},
	locrianN2: function(root) {
		const intervals = ["J1","M2","m3","J4","dim5","m6","m7"];
		return renderScale(root, intervals);
	},
	altered: function(root) {
		const intervals = ["J1","m2","m3","dim4","dim5","m6","m7"];
		return renderScale(root, intervals);
	}
}