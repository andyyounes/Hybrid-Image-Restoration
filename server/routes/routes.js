const express = require('express');

const router = express.Router()

module.exports = router;
const Model = require('../models/model');

router.get('/users/login', (req, res) => {
    res.send('Get All API')
})
