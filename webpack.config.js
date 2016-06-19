var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: []
	},
	resolve: {
		alias: {
            lodash: path.resolve( __dirname, './node_modules/lodash-node/modern')
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			_: 'lodash'
		})
	]
};