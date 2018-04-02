var express = require('express');
var router = express.Router();

router.get('/qr?', function (req, res, next) {
    res.render('descargar-app', { layout: false });
});

module.exports = router;
