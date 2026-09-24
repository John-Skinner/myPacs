import {defineConfig} from '@rspack/cli';

export default defineConfig({
    entry: {
        main: './index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|jsx|ts|tsx)$/,
                use: {
                    loader: 'builtin:swc-loader',
                    options: {
                        detectSyntax: 'auto',
                    }
                }
            },
            { test: /\.css$/i, type: 'css/auto' },
        ]
    }
})
