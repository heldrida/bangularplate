var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: []
	}
};