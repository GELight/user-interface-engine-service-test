const model = require('./model');
const ServiceConfig = require('./service-config.js');
const request = require('request-promise');

module.exports = {
    async getTest (req, res) {
        try {
            const descriptionJson = await model.getTest();
            res.set('content-type', 'application/json');
            res.send(descriptionJson);
        } catch  (e) {
            res.status(500).end(e);
        }
    }
}