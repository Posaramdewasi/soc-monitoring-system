const mongoose = require("mongoose")

const IncidentSchema = new mongoose.Schema({

timestamp:{
type:Date,
default:Date.now
},

alert_id:{
type:String
},

incident_type:{
type:String
},

severity:{
type:String
},

status:{
type:String,
default:"Open"
},

assigned_analyst:{
type:String,
default:"SOC-L1"
},

notes:{
type:String
}

})

module.exports = mongoose.model("Incident",IncidentSchema)