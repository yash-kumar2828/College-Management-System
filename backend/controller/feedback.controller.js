import Feedbacks from '../model/feedback.model.js';

export const createFeedback=async(req,res)=>{
    try {
        const {name,email,message}= req.body;
        const feedback=await Feedbacks.create({
            name,
            email,
            message
        });
        res.status(201).json({success:true, data:feedback});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
};


export const getFeedback=async(req,res)=>{
    try {
        const feedbacks=await Feedbacks.find();
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}