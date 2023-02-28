const path = require("path");

module.exports = {
    mode:'development',
    entry:{
        bundle: './src/index.js',
        silver: './src/silver.js',
        platinum: './src/platinum.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    devtool: 'inline-source-map', 
    module: {
        rules: [
            {
            test: /\.scss$/,
            use:['style-loader', 'css-loader', 'sass-loader']
        },
            {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }

        ]
        
    }
    

    
}