import { defineConfig } from 'tsup'

export default defineConfig({
	entry: [
		'src/index.ts',
		'src/components/layout/index.ts',
		'src/components/text/index.ts',
		'src/components/button/index.ts',
	],
	outDir: 'dist',
	format: ['esm', 'cjs'],
	dts: true, // generate .d.ts files
	clean: true, // remove old files in dist before build
	splitting: false,
	sourcemap: false,
	minify: true,
	target: 'esnext',
	external: ['react', 'react-dom'], // don't bundle React
})
