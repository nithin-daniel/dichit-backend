const mongoose = require("mongoose");

const Chittis = mongoose.Schema(
    {
        name:{
            type:String
        },
        user_id:{
            type:String
        },
        date_of_start:{
            type:String
        },
        no_of_tickets:{
            type:String
        },
        amount:{
            type:String
        }
    }
)


module.exports = mongoose.model("Chittis",Chittis)