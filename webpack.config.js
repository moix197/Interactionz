const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'interactionz.js',
        libraryTarget: 'var',
        library: 'Interactionz'        
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}