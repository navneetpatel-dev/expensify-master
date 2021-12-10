// login gif
https://i.gifer.com/7TwJ.gif
https://media.giphy.com/media/3o6UB4zAURoccSY000/giphy.gif
https://media.giphy.com/media/JsKIF8VcNgUujQTgtH/giphy.gif

react-scripts build
"start": "webpack-cli serve --mode development",
# Git Commands

git init - Create a new git repo
git status - View the change to your project code
git add - Add files to staging area
git commit - Create a new commit from staging area
git log - View recent commits 

"start": "webpack-cli serve --mode development",
devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
"build:dev": "webpack",
"build:prod": "webpack --config webpack.prod.js",


new WebpackShellPluginNext({
                onBuildStart:{
                  scripts: ['echo "===> Starting packing with WEBPACK 5"'],
                  blocking: true,
                  parallel: false
                },
                onBuildEnd:{
                  scripts: ['npm run yourCommand'],
                  blocking: false,
                  parallel: true
                }
              })
          

// WEBPACK.CONFIG.JS

const path = require("path");
const ExtrsctTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtrsctTextPlugin('styles.css');

    return {
        entry: './src/app.js',
        output: {
            "path": path.join(__dirname, 'public'),
            "filename" : "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],

        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}