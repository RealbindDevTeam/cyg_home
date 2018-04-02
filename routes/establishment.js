var express = require('express');
var router = express.Router();
var Establishment = require('../models/establishment');

router.get('/establishments', function (req, res, next) {
    Establishment.find(function (err, establishments_info) {
        res.render('establishment', { establishments: establishments_info });
    });
});
module.exports = router;