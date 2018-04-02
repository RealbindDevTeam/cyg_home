var express = require('express');
var router = express.Router();

router.get('/tienes-un-restaurante', function (req, res, next) {
    res.render('tienes-un-restaurante', { layout: false });
});

module.exports = router;
