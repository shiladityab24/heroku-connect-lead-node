module.exports = app => {
    const leads = require("../controllers/lead.controller.js");
    var router = require("express").Router();
    // Create a new lead
    router.post("/",leads.create)
    app.use('/api/leadcreate', router);

}

// const express = require('express')
// const router = express.Router()
// const salesforceService = require('../services/salesforceService')
// router.get('/login', salesforceService.login)