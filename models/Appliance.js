const mongoose = require('mongoose');
const config = require('../config/database');

const ApplianceSchema = mongoose.Schema({
    name: String,
    manufacturer: String,
    discription: {
        typ: String,
        color: String,
        energyClass: String,
        weight: Number
    },
    price: Number
});

const Appliance = mongoose.model('Appliance', ApplianceSchema);

module.exports = Appliance;

module.exports.getApplianceById = function(id, callback) {
    Appliance.findById(id, callback);
}

module.exports.addData = function(data, callback) {
    data.save(callback);
}
