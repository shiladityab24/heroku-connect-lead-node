const db = require("../models");
const Lead = db.lead;

// Create Lead
exports.create = (req,res) => {
    // Validate request
    // if(!req.body.LastName){
    //     res.status(400).send({
    //         message: "Lead payload can't be empty"
    //     });
    //     return;
    // }
    const epochtime = new Date().getTime();
    // Create a lead
    const lead = {
        id: req.body.id ? req.body.id :new Date().getTime(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobilephone: req.body.mobilephone,
        status: req.body.status ? req.body.status: 'New',
        company: req.body.company? req.body.company: 'TVS Credit',
        finserv__referredbyuser__c: req.body.finserv__referredbyuser__c ? req.body.finserv__referredbyuser__c: '005DR00000GBEfHYAX',
        isdeleted:req.body.isdeleted ? req.body.isdeleted : false
    };

    Lead.create(lead)
    .then(data=> {
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the lead"
        });
    });
};