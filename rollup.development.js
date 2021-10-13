import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

export default [{
        input: './src/CampayaApp.ts',
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            serve({
                contentBase: 'development',
                open: true,
                historyApiFallback: true,
                port: 10004
            }),
            livereload({ watch: 'development' })
        ],
        output: {
            entryFileNames: '[name].js',
            dir: './development',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]
