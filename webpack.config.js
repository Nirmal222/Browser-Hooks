const path = require('path');

module.exports = {
    mode: 'production', // Set to 'development' for development mode
    entry: './src/index.js', // Entry point of your custom hooks
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'bundle.js', // Output filename
        library: 'yourPackageName', // Name of your package as a global variable
        libraryTarget: 'umd', // Universal Module Definition (UMD) format
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

};
