const model = require("../models/bar-model");

class BarController {
    getBars = (req, res) => {
        res.send(model.getBars());
    }
}

module.exports = new BarController();