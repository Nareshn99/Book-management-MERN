const userModel = require('../models/userModel')
const validation = require('../utils/validations')
const jwt = require("jsonwebtoken")


const createUser = async (req, res) => {
    try {

        let requestBody = req.body

        let {  name, phone, email, password, address } = requestBody

        //check for empty requestBody
        if (Object.keys(requestBody).length === 0) return res.status(400).send({ status: false, message: "Please provide user details" })
        
    
        // //validation for title
        // if (!title) {
        //     return res.status(400).send({ status: false, message: "Title is mandatory" })
        // }
        // let arr=["Mr","Mrs","Miss"]
        // if (!validation.isValidTitle(title)) {
        //     return res.status(400).send({ status: false, message: `Title can only be ${arr.join(",")} / String only`})
        // }

        //validation for name
        if (!name) {
            return res.status(400).send({ status: false, message: "Name is mandatory" })
        }
        if (!validation.isValidName(name)) {
            return res.status(400).send({ status: false, message: "Name should be alphabatical Order And String is valid" })
        }

        //validation for phone
        if (!phone) {
            return res.status(400).send({ status: false, message: "Phone Number is Mandatory" })
        }
        if (!validation.isValidPhone(phone)) {
            return res.status(400).send({ status: false, message: "Phone Number contain only 10 digits" })
        }
        

        //validation for email
        if (!email) {
            return res.status(400).send({ status: false, message: "Email is Mandatory" })
        }
        if (!validation.isValidEmail(email)) {
            return res.status(400).send({ status: false, message: "Email is Invalid" })
        }
        

        //validation for password
        if (!password) {
            return res.status(400).send({ status: false, message: "Password is Mandatory" })
        }
        if (!validation.isValidPassword(password)) {
            return res.status(400).send({ status: false, message: "Password is in Invalid formate,Minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character" })
        }
        
        // Check for uniqueness of phone and email
        let user = await userModel.find({$or : [ {phone} , {email} ] })
        for(let key of user){
            if(key.phone==phone.trim()){
                return res.status(409).send({ status: false, message: "Given phone is already taken" })
            }
            if(key.email==email.trim().toLowerCase()){
                return res.status(409).send({ status: false, message: "Given email is already taken" })
            }
        }

        // Creating user document
        let data = await userModel.create(requestBody)
        return res.status(201).send({ status: true, message:"Success", data: data })
    }
    catch (err) {
        return res.status(500).send({ status:false, message: err.message })
    }
}


const userlogin = async function (req, res) {
    try {
        let requestBody = req.body
        let {email,password}=requestBody

        if(Object.keys(requestBody).length==0){
            return res.status(400).send({status:false,msg:"please provide user details to login"})
        }


        if (!email) {
            return res.status(400).send({ status: false, msg: "Please provide email" })
        }
        if(!validation.isValidEmail(email)){
            return res.status(400).send({ status: false, msg: "Invalid email" })
        }

        if (!password) {
            return res.status(400).send({ status: false, msg: "Please provide password" })
        }

        let userDetails = await userModel.findOne({ email, password })
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "Incorrect credentials" })
        }
        let token = jwt.sign(
            { userId: userDetails._id.toString() },
            "ParshantNareshPriyankaVaseem",
            { expiresIn: '1d' }
        )
        
        return res.status(200).send({ status: true, message:"Success", data:{token:token} });

    } catch (err) {
        return res.status(500).send({status:false, message:err.message})
    }
}


module.exports={createUser, userlogin }