const ContactUsModel = require('../models/ContactUsManagementModel');


const CreateContactUs = async (req, res) => {
    try {
        const {
            description,
            email,
            foreName,
            subject,
            phoneNumber
        } = req.body;

        const DocToCreate = new ContactUsModel({
            description,
            email,
            foreName,
            subject,
            phoneNumber
        });

        const DocToSave = await DocToCreate.save();

        res.json({
            Message:'Contact Has Created Successfuly',
            Data:true,
            Result:DocToSave
        })
    } catch (error) {
        res.json({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
}

module.exports={
    CreateContactUs,
}