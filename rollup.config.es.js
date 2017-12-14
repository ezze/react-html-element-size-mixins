import babel from 'rollup-plugin-babel';

const config = {
    name: 'ReactHtmlElementSizeMixins',
    input: 'src/index.js',
    output: {
        file: 'dist/react-html-element-size-mixins.es.js',
        format: 'es'
    },
    external: [
        'html-element-size'
    ],
    plugins: [
        babel({
            babelrc: false,
            presets: [
                ['env', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        })
    ]
};

export default config;
