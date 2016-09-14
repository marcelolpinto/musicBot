var addInterval = require('./add_interval');

module.exports = function renderScale(root, intervals) {
	var print = root;
	intervals.map(function(interval, i) {
		if(i == 0) return;
		print = print + " - " + addInterval(root, interval);
	})
	return print;
}