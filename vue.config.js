// var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // additionalData: `@import "@/scss/_variables.scss";`
            }
        }
    },
    configureWebpack: {
        // rules: [
            // {
            //     test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            //     loader: 'file-loader',
            // }
        // ],
        plugins: []
    }

}