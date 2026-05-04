const express = require("express")
const router = express.Router()

let users = []

// REGISTER
router.post("/register",(req,res)=>{

const {username,password,role} = req.body

const userExists = users.find(u=>u.username===username)

if(userExists){
return res.status(400).json({message:"User already exists"})
}

const newUser = {
username,
password,
role: role || "user"
}

users.push(newUser)

console.log("User Registered:", newUser)

res.json({message:"Registered Successfully"})
})

// LOGIN
router.post("/login",(req,res)=>{

const {username,password} = req.body

const user = users.find(
u => u.username===username && u.password===password
)

if(!user){
return res.status(401).json({message:"Invalid credentials"})
}

res.json({
message:"Login Success",
role:user.role
})

})

module.exports = router