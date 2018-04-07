var express = require('express');
var router = express.Router();

//Return sitemap.xml
router.get('/sitemap.xml', function (req, res, next) {
    function generateXmlSitemap() {
        var root_path = 'https://www.comeygana.com/';
        var urls = ['', 'gana-por-comer', 'tienes-un-restaurante', 'formulario-contacto', 'gracias', '404'];
        var priority = [1.00, 0.80, 0.80, 0.64, 0.64, 0.10];
        var freq = 'monthly';
        var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">';
        for (var i in urls) {
            xml += '<url>';
            xml += '<loc>' + root_path + urls[i] + '</loc>';
            xml += '<lastmod>2018-04-07T00:05:11-30:00</lastmod>';
            xml += '<changefreq>' + freq + '</changefreq>';
            xml += '<priority>' + parseFloat(Math.round(priority[i] * 100) / 100).toFixed(2) + '</priority>';
            xml += '</url>';
            i++;
        }
        xml += '</urlset>';
        return xml;
    }

    var sitemap = generateXmlSitemap();
    res.header('Content-Type', 'text/xml');
    res.send(sitemap);
});

module.exports = router;