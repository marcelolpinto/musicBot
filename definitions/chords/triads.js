var addInterval = require('../../actions/add_interval');

module.exports = {
	majorTriad: function(root) {
		return `${root} - ${addInterval(root, "M3")} - ${addInterval(root, "J5")}`;
	},
	minorTriad: function(root) {
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "J5")}`;
	},
	diminishedTriad: function(root) {	
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "dim5")}`;
	},
	augmentedTriad: function(root) {	
		return `${root} - ${addInterval(root, "M3")} - ${addInterval(root, "aug5")}`;
	}	
}