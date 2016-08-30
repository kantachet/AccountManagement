- package.json is actual json not javascript
- create package.json file by run npm command
- npm init
- See : <https://docs.npmjs.com/getting-started/using-a-package.json>
- ==============================================================================
- default config & require by npm
- npm config ls -l
- see :<https://docs.npmjs.com/misc/config>
- ==============================================================================
- devDependencies is dependencies for development environment
- dependencies for production environment
- npm install

  <packagename> -g -dev --save</packagename>

- -g flag is install to global

- -dev install on dev environment only
- --save is save package to this file
- scirpts is run when start
- run node xyz.js in this folder on terminal for start application by node and node will see package.js automatically



/*"dev": "concurrently --kill-others 'webpack-dev-server --hot --progress --colors' 'babel-node server --progress --colors'",
"deploy": "webpack -p --progress --colors --config webpack.deploy.config.js",
"server": "babel-node server --progress --colors"*/
