import styles from 'rollup-plugin-styles';
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
	input: './index.js',
	output: {
		file: './build/bundle.js',
		format: 'iife',
		name: 'build',
	},
	watch: {
		exclude: ['node_modules/**']
	},
	plugins: [
		styles(),
		image(),
		babel({
			babelHelpers: 'bundled',
			presets: ['@babel/env']
		}),
		serve({
			contentBase: './',
			open: true,
			port: 8000,
		}),
		livereload(),
	],
}