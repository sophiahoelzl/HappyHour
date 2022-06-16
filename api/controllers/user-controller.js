const model = require("../models/users-model");

class UserController {
    registerUser = (req, res) => {
        res.send(model.register(req.body));
    }
}

module.exports = new UserController();