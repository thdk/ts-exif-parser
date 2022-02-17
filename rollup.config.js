import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'lib/index.ts',
        output: {
            file: 'dist/umd/ts-exif-parser.js',
            format: 'umd',
            name: 'TsExifParser',
        },
        plugins: [
            typescript({
                declaration: false,
            })
        ]
    },
    {
        input: 'lib/index.ts',
        output: {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [typescript({
            sourceMap: true,
        })]
    },
    {
        input: 'lib/index.ts',
        output: {
            dir: 'dist/es',
            format: 'es',
            sourcemap: true,
        },
        plugins: [typescript({
            declarationDir: "dist/es",
            declaration: true,
            sourceMap: true,
        })]
    },
];