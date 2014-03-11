exports.getById = function (req, res) {
    res.send([{"id": parseInt(req.params.id), "description": "placeholder"}]);
};

exports.create = function (req, res) {
    res.send(201, [{"id": 1, "description": req.body.description}]);
};

exports.update = function (req, res) {
    if (req.body.id == req.params.id) {
        res.send([{"id": req.body.id, "description": req.body.description}]);
    }
    else {
        res.send(400, "invalid request !");
    }
};

exports.delete = function (req, res) {
    res.send("done.");
};