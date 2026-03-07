import Contacts from '../model/contact.model.js';

export const addContact=async(req,res)=>{
    try {
        const {name,email,number,subject,message}=req.body;
        const exit=await Contacts.findOne({email});
        if(exit){
            return res.status(400).json({message:'Email already exit!'});
        }
        const contact=await Contacts.create({
            name,email,number,subject,message
        });
        res.status(200).json({message:'Message send successfully!'})
    
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}; 


export const getContact=async(req,res)=>{
    try {
        const contacts=await Contacts.find();
        res.json(contacts);
    } catch (error) {
        res.staus(500).json({message:ErrorEvent.message});
    }
}