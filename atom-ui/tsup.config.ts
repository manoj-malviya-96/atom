import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	format: ['esm', 'cjs'],
	dts: true, // generate .d.ts files
	clean: true, // remove old files in dist before build
	splitting: false,
	sourcemap: false,
	minify: false,
	target: 'esnext',
	external: ['react', 'react-dom'], // don't bundle React
})
