var addInterval = require('../../actions/add_interval');
var renderScale = require('../../actions/render_scale');

module.exports = {
	harmonicMinor: function(root) {
		const intervals = ["J1","M2","m3","J4","J5","m6","M7"];
		return renderScale(root, intervals);
	},
	locrianN6: function(root) {
		const intervals= ["J1","m2","m3","J4","dim5","M6","m7"]
		return renderScale(root, intervals);
	},
	ionianAug5: function(root) {
		const intervals = ["J1","M2","M3","J4","aug5","M6","M7"];
		return renderScale(root, intervals);
	},
	dorianAug4: function(root) {
		const intervals = ["J1","M2","m3","aug4","J5","M6","m7"];
		return renderScale(root, intervals);
	},
	phyrgianDom: function(root) {
		const intervals = ["J1","m2","M3","J4","J5","m6","m7"];
		return renderScale(root, intervals);
	},
	lydianAug2: function(root) {
		const intervals = ["J1","aug2","M3","aug4","J5","M6","M7"];
		return renderScale(root, intervals);
	},
	superLocrian: function(root) {
		const intervals = ["J1","m2","m3","dim4","dim5","m6","dim7"];
		return renderScale(root, intervals);
	}
}