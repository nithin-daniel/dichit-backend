const express = require('express');
const router = express.Router();



const auth = require('./users');
const suscriberDetails = require('./subscriber');
const Chittis = require('./chittis');
const payment = require('./payment');
const vendorDetails = require('./vendor');
const chittiRequest = require('./chittiRequest');


router.use('/auth', auth);
router.use('/user', suscriberDetails);
router.use('/chitti', Chittis);
router.use('/payment', payment);
router.use('/vendor', vendorDetails);
router.use('/chitti-request', chittiRequest);
router.use('/subscriber', suscriberDetails);








router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'API is working properly'
    });
});


module.exports = router;