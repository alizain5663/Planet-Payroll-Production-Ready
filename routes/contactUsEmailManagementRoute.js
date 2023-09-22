const express = require('express');
const Router = express.Router();

const { sendEmailAgent  } = require('../controllers/contactUsEmailManagement');

Router.post('/sendEmailAgent',sendEmailAgent);
module.exports =  Router