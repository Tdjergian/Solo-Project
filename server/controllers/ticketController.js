const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');


const ticketController = {};

ticketController.addTicket = async (req, res, next)=>{
    const ticketData = req.body;
    const ssid = req.cookies.ssid;
    // console.log('this is just ticketData', ticketData);
    try{
        const newticket = await Ticket.create(ticketData);
        // console.log('this is the new ticket:', newticket)
        const user = await User.findOneAndUpdate({_id : ssid}, {$push:{tickets: newticket._id}});
        res.locals.newticket = newticket;
        next();

    }
    catch (err){
       next(err);
    }
};
ticketController.getTickets = async (req, res, next)=>{
    const ssid = req.cookies.ssid;
    try{
        console.log('in getTickets controller')
        const user = await User.findOne({ _id : ssid }).populate('tickets');
        // console.log(user)
        const tickets = user.tickets;
        // console.log(tickets);
        res.locals.tickets = tickets;
        next();
    }
    catch(err){
        next(err);
    }
};
ticketController.deleteTicket = async (req, res, next)=>{
    console.log('in deleteTicket controller')
    const ticket_id = req.params._id;
    const user_id = req.cookies.ssid;
    try{
        await Ticket.deleteOne({_id: ticket_id});
        const updatedUser = await User.findOneAndUpdate({_id: user_id}, {$pull: {tickets: ticket_id}}).populate('tickets');
        const updatedTickets = updatedUser.tickets;
        // console.log('updated tickets:', updatedTickets);
        // console.log('updated user:', updatedUser);
        res.locals.updatedTickets = updatedTickets;
        next();
    }
    catch(err){
        next(err);
    }
};
ticketController.addComment = async (req, res, next)=>{
    console.log('in addComment controller');
    const newComment = req.body
    const ticket_id = req.params._id;
    const user_id = req.cookies.ssid;
    try{
        await Ticket.updateOne({_id: ticket_id}, {$push: {comments: newComment}});
        const updatedUser = await User.findOne({_id: user_id}).populate('tickets');
        const updatedTickets - updatedUser.tickets;
        res.locals.updatedTickets = updatedTickets;
        next();
    }
    catch(err){
        next(err);
    }
};
module.exports = ticketController;
