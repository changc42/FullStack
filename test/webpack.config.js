module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				/\.js$/
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};