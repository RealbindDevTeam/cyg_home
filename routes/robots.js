var express = require('express');
var router = express.Router();

//Return robots.txt
router.get('/robots.txt', function (req, res, next) {
    function generateRobotsTxt() {
        var txt = `User-agent: *\nDisallow: /formulario-contacto\nDisallow: /gracias\nDisallow: /404\nDisallow: /bin/\nDisallow: /models/\nDisallow: /node_modules/\nDisallow: /app.js\nDisallow: /Dockerfile\nDisallow: /package-lock.json\nDisallow: /package.json\n\nSitemap: https://www.comeygana.com/sitemap.xml`;
        return txt;
    }

    var robotsFile = generateRobotsTxt();
    res.type('text/plain');
    res.send(robotsFile);
});

module.exports = router;