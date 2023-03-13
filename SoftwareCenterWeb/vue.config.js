const path = require('path');

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, "./src/assets/style/global.less")
            ]
        }
    }
}