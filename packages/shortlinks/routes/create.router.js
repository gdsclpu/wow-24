const express = require('express');
const axios = require('axios');
const handlebars = require('express-handlebars');
const dotenv = require('dotenv').config();

const dubkey = process.env.DUB_CO_API_KEY;
const dubbase = `https://api.dub.co/links?projectSlug=${process.env.DUB_CO_PROJECT}`;
const dubdomain = process.env.DUB_CO_DOMAIN;

const router = express.Router();

// routes here
router.get('/', (req, res) => {
    res.render('create');
});

router.post('/', async (req, res) => {
    const headers = {
        'Authorization': `Bearer ${dubkey}`,
        'Content-Type': 'application/json'
    };
    const body = {
        "domain": dubdomain,
        "url": req.body.longlink,
        "key": req.body.shortlink
    };

    try{
        const response = await axios.post(dubbase, body, {headers: headers})
        res.status(response.status).json({
            message: response.statusText,
            body: response.data
        });
    } catch (error) {
        res.status(error.response.status).json({
            message: error.response.statusText,
        });
    }
});

module.exports = router