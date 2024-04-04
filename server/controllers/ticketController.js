const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');


const ticketController = {};

ticketController.addTicket = async (req, res, next)=>{
    const ticketData = req.body;
    const ssid = req.cookies.ssid;
    console.log('this is just ticketData', ticketData);
    try{
        const newticket = await Ticket.create(ticketData);
        console.log('this is the new ticket:', newticket)
        const user = await User.findOneAndUpdate({_id : ssid}, {$push:{tickets: newticket._id}});
        // console.log(newticket)
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
        console.log(user)
        const tickets = user.tickets;
        console.log(tickets);
        res.locals.tickets = tickets;
        next();
    }
    catch(err){
        next(err);
    }
};

module.exports = ticketController;
