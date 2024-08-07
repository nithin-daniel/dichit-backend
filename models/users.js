const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const id = nanoid()
const UsersSchema = new mongoose.Schema(
    {
        role: {
            type: String
        },
        password: {
            type: String
        },
        phoneNumber: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Users = mongoose.model("UserSchema", UsersSchema);
module.exports = Users 