var express = require('express');
var router = express.Router();

router.get('/gana-por-comer', function (req, res, next) {
    res.render('gana-por-comer', { layout: false });
});

module.exports = router;
