//Depnedemcies and Initialization
const express = require('express');
const Router = express.Router();
//Depnedemcies and Initialization


//Start Block Accessing The Library Files And Routes
const { 
    CreateContactUs,
    GetAllContactUs,
    GetIndividualContactById
 } = require('../controllers/ContactUsManagementController');

 const {
    SendTemplateFile
 } = require('../controllers/SendTemplateFileViaEmail')
//End Block Accessing The Library Files And Routes

//Start Block Accessing The Library Files And Routes
const {
    EmailTemplateFile
} = require('../miscellaneousfiles/SaveEmailTemplateFile');
//End Block Accessing The Library Files And Routes

//Start Block For Accessing The Controlers
Router.post('/CreateContactUs',CreateContactUs);
//End Block For Accessing The Controlers


module.exports = Router;