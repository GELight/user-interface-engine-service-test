const model = require('./model');

module.exports = {
    async getTest (req, res) {
        try {
            const test = await model.getTest();
            res.json(test);
        } catch  (e) {
            res.status(500).end(e);
        }
    }
}