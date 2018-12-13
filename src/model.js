module.exports = {
    getTest (req) {
        return new Promise((resolve, rejected) => {
            resolve({ test: 'muh' });
        });
    }
}