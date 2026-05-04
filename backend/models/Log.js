const mongoose = require("mongoose")

const LogSchema = new mongoose.Schema({

timestamp:{
type:Date,
default:Date.now
},

source_device:{
type:String
},

event_type:{
type:String
},

ip_address:{
type:String
},

severity:{
type:String
},

description:{
type:String
}

})

module.exports = mongoose.model("Log",LogSchema)