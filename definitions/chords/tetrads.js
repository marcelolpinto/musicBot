var addInterval = require('../../actions/add_interval');

module.exports = {
	major7: function(root) {
		return `${root} - ${addInterval(root, "M3")} - ${addInterval(root, "J5")} - ${addInterval(root, "M7")}`;
	},
	minor7: function(root) {
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "J5")} - ${addInterval(root, "m7")}`;
	},
	dominant7: function(root) {	
		return `${root} - ${addInterval(root, "M3")} - ${addInterval(root, "J5")} - ${addInterval(root, "m7")}`;
	},
	halfDiminished: function(root) {	
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "dim5")} - ${addInterval(root, "m7")}`;
	},
	fullDiminished: function(root) {	
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "dim5")} - ${addInterval(root, "dim7")}`;
	},
	minorMajor7: function(root) {
		return `${root} - ${addInterval(root, "m3")} - ${addInterval(root, "J5")} - ${addInterval(root, "M7")}`;
	}
}