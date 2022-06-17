const model = require("../models/users-model");

class UserController {
    registerUser = (req, res) => {
        res.send(model.register(req.body));
    }

    getUser = (req, res) => {
        res.send(model.getUsers());
    }
}

module.exports = new UserController();