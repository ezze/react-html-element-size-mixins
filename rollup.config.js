import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const { NODE_ENV } = process.env;

const globals = {};

const external = Object.keys(globals);

const babelOptions = {
    babelrc: false,
    presets: [
        ['env', { modules: false }]
    ],
    plugins: [
        'external-helpers'
    ],
    exclude: 'node_modules/**'
};

const plugins = [
    babel(babelOptions),
    resolve(),
    commonjs()
];

if (NODE_ENV === 'production') {
    plugins.push(uglify({}, minify));
}

export default {
    name: 'htmlElementSize',
    input: 'src/index.umd.js',
    output: {
        file: `dist/react-html-element-size-mixins${NODE_ENV === 'production' ? '.min' : ''}.js`,
        format: 'umd'
    },
    globals,
    external,
    plugins
};
