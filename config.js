var packageJson = require('./package.json');

module.exports = {
    appName: packageJson.name,
    version: packageJson.version
}