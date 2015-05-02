Package.describe({
	summary: "tablesorter is a jQuery plugin for turning a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes. tablesorter can successfully parse and sort many types of data including linked data in a cell."
});

Package.on_use(function (api) {

    api.use('jquery');

	api.add_files([
		'lib/css/theme.bootstrap.css',
		'lib/js/jquery.tablesorter.js',
		'lib/js/jquery.tablesorter.widgets.js'
		], 'client');
});