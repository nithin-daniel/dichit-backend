const mongoose = require("mongoose");

const SuscriberDetailsSchema = mongoose.Schema(
    {
        user_id:{
            type:String,
            required:true
        },
        name:{
            type:String
        },
        dob:{
            type:String
        },
        gender:{
            type:String
        },
        age:{
            type:Number
        },
        location:{
            type:String
        },
        pincode:{
            type:String
        },
        address:{
            type:String
        },
        aadhar:{
            type:Number
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("SuscriberDetailsSchema",SuscriberDetailsSchema);