var express = require('express');
var router = express.Router();

router.get('/formulario-contacto', function (req, res, next) {
    res.render('formulario-contacto', { layout: false });
});

module.exports = router;
