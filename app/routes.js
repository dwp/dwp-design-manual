const express = require('express')
const router = express.Router()

var planData = require('./assets/javascripts/plandata.json');
var servicelist = require('./assets/javascripts/servicelist.json');

router.get('/', function(req, res) {
    req.session.data.planData = planData;
    req.session.data.servicelist = servicelist;
    res.render('index')
});

module.exports = router