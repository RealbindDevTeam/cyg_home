var express = require('express');
var router = express.Router();

router.get('/gracias', function (req, res, next) {
    res.render('gracias', { layout: false });
});

module.exports = router;
