console.time("Startup time")

// import {
//     APPLICATION_SERVER,
//     APPLICATION_PORT
// } from './config'
// BASE SETUP
// =============================================================================
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config'
import compiler from webpack(webpackConfig)
    // =============================================================================
import config from './config'
//var APPLICATION_PORT = 5000;
//import {APPLICATION_SERVER, APPLICATION_PORT} from './config';
// call the packages we need
import express from 'express'; // call express
import http from 'http';
import path from 'path';
//import fileServer from 'serve-static';
var app = express(); // define our app using express
var port = process.env.PORT || config.webPort; // set our port
//var publicPath = path.resolve(__dirname);
//app.use(express.static(publicPath)); // was fileServer( process.cwd() )

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))

app.use(function(req, res) {
        res.sendFile(__dirname + '/index.html')
    })
    // var https = require('https');
    // const fs = require('fs');
    // const options = {
    //     pfx: fs.readFileSync('server.pfx')
    // };


// START THE SERVER
// =============================================================================
//create server (in case interested in socket.io)
//https.createServer(options,app).listen(port);

// var methods = [
//     [
//         'info', '\x1b[36m', 'inf'
//     ],
//     [
//         'warn', '\x1b[33m', 'wrn'
//     ],
//     [
//         'error', '\x1b[5m\x1b[31m', 'err'
//     ],
//     ['log', '\x1b[2m', 'log']
//
// ];
// methods.forEach((pair) => {
//     var method = pair[0],
//         reset = '\x1b[0m',
//         color = pair[1];
//     console[method] = console[method].bind(console, color, "ks " + method.toUpperCase(), reset);
// });

http.createServer(app).listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info("🌎  Listening on port %s. Open up http://%s:%s/ in your browser", port, config.webServer, port)
    }
})
console.timeEnd("Startup time");
