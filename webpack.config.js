var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var assetsDir = path.resolve(__dirname, 'public/assets');

var config = {

    entry:[ './app/index.js'],
    devtool:'source-map',
    output:{
        path:assetsDir,
        filename:'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                include: path.join(__dirname, 'app')
            }, {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss'
            },
            {
                test: /index.html$/,
                loader: "file?name=[name].[ext]",
            }, {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000@name=[name][ext]'
            }
        ]
    },
    resolve: {
        root: path.resolve('./app')
    },
    plugins:[configureHtml(),
    provideQuery()]

};
function configureHtml(){
    return new HtmlWebpackPlugin
    (
        {
            template:'app/index.ejs',
            inject:'body'
        }
    );
}

function provideQuery() {
    return new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    });
}
module.exports =config;
