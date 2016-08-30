var config = require('./webpack.config');
var webpack = require('webpack');
config.entry = {
        main: [config.mainPath] //,
            //vendors: ['react']
    }
    //config.entry.server: [path.resolve(__dirname, 'server.js')]
config.output.filename = '[name].js';
config.plugins.concat([new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('commons.js'),
    //new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
])
console.error(config);
module.exports = config;
