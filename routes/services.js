const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Appliances = require('../models/Appliance');


router.get('/AppliancesList', passport.authenticate('jwt', {session: false}), (req, res) => {
    Appliances.find({}, null, null, function(err, result) {
        res.json({data: result});
    });
});

router.post('/AppliancesDetail', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const id = req.body.id;
    Appliances.getApplianceById(id, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

router.post('/addData', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    let newData = new Appliances({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        discription: {
            typ: req.body.discription.typ,
            color: req.body.discription.color,
            energyClass: req.body.discription.energyClass,
            weight: req.body.discription.weight
        },
        price: req.body.price
    });

    Appliances.addData(newData, (err) => {
        if(err) {
            res.json({success: false, msg: 'Data not added'});
        } else {
            res.json({success: true, msg: 'Data added'}); 
        }
    });
});

module.exports = router;