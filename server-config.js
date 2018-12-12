var packageJson = require('./package.json');

const config = {
    app_name: packageJson.name,
    version: packageJson.version,
    host: '/',
    port: 9001
}

module.exports = config;