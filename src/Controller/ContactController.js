const { Contact } = require("../Models/ContactModel")



const CREATE_CONTACT_CONTROLLER=async(req,res)=>{
    console.log(req.body)
    try{
        await Contact.create(req.body);
        res.status(200).json({Result:"Thanks for contact us ! We will get back to you soon."})

    }catch(ex){
        res.status(400).json({Result:"Error - "+ex.message})
    }
}

module.exports={CREATE_CONTACT_CONTROLLER}