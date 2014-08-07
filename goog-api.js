(function (root, factory) {
	// FIXME why define.amd has only {jQuery: true}?
    if (typeof define === 'function' && define.amd) {
		// FIXME don't work using define. Why? 
		require(['src/spreadsheet'], function (Spreadsheet) {
			// FIXME workarround. Broken require.config in app.
			return (root.GOOGAPI = factory(Spreadsheet));
		});
    } else {
        root.GOOGAPI = factory(root.spreadsheet);
    }
}(this, function (Spreadsheet) {
	return {
		VERSION: '0.0.1'
		, spreadsheet: new Spreadsheet()
	};
}));
