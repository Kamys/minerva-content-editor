const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');

const isProduction = process.env.NODE_ENV === 'production';


const devtool = !isProduction ? 'source-map' : 'none';


const moduleWebpack = {
	rules: [
		{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
		},
		{
			test: /.js$/,
			loader: 'source-map-loader',
			enforce: 'pre',
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
	],
};

const config = {
	entry: './index.tsx',
	context: sourcePath,
	output: {
		path: outPath,
		filename: '[name].js',
	},
	devtool,
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: ['node_modules', sourcePath],
		alias: {
			src: sourcePath,
		},
	},
	devServer: {
		open: false,
	},
	node: {
		__dirname: false,
		__filename: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
			inject: 'body',
		}),
	],
	module: moduleWebpack,
};

module.exports = config;
