import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
	plugins: [
		babel({
			filter: /\.(js|jsx|mjs|cjs)$/,
			babelConfig: {
				babelrc: false,
				configFile: false,
				plugins: [
					[
						'@babel/plugin-proposal-decorators',
						{
							version: '2023-11', // Or '2023-05'
						},
					],
					'@babel/plugin-transform-class-properties',
					'@babel/plugin-transform-class-static-block',
				],
			},
			enforce: 'pre',
		}),
	],
});
