const mongoose = require("mongoose")

const AlertSchema = new mongoose.Schema({

timestamp:{
type:Date,
default:Date.now
},

alert_type:{
type:String
},

ip_address:{
type:String
},

severity:{
type:String
},

status:{
type:String,
default:"Open"
}

})

module.exports = mongoose.model("Alert",AlertSchema)