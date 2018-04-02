var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var establishmentSchema = new Schema({
    countryId: String,
    cityId: String,
    other_city: String,
    name: String,
    currencyId: String,
    address: String,
    indicative: String,
    phone: String,
    establishment_code: String,
    paymentMethods: [String],
    points_validity: String,
    tables_quantity: Number,
    image: {
        _id: String,
        filename: String,
        handle: String,
        mimetype: String,
        originalPath: String,
        size: String,
        source: String,
        url: String,
        originalFile: {},
        status: String,
        key: String,
        container: String,
        uploadId: String
    },
    orderNumberCount: Number,
    max_jobs: Number,
    queue: [String],
    isActive: Boolean,
    firstPay: Boolean,
    freeDays: Boolean,
    is_premium: Boolean,
    is_beta_tester: Boolean
});

module.exports = mongoose.model('Establishment', establishmentSchema);