var User= require("../Models/signup")
var login= require("../Models/login")
var getuser = require("../Models/signup")

const CreateUser = async (req, res) => {
    const {fname,lname,email,password,retypepass,contact} = req.body;
    const Userdata = await User.create({fname,lname,email,password,retypepass,contact })
  if (Userdata) {
    console.log(Userdata);
    res.json(Userdata);
  } else {
      console.log("User Not Created");
      res.json("User Not Created");
  }
};


const userLoginController =  async (req, res) => {
 
  const { email, password } = req.body;

  const userfound = await getuser.findOne({ email,password });
  console.log(userfound)

    if (userfound) {
    
      res.json({ success: true, message: 'User Found' });

    }else {
    
      res.status(401).json({ success: false, message: 'Invalid Email or Password' });

  }
};

const loginuser = async (req, res) => {
  const {email,password} = req.body;
    const Userdata = await login.create({email,password})
  if (Userdata) {
    console.log(Userdata);
    res.json(Userdata);
  } else {
      console.log("Logged in");
      res.json("not logged in");
  }
};
const GetOneuser = async (req, res) => {
    const id = req.params.id;
    const userdata = await getuser.findById(id);
      if (userdata) {
        
      console.log("user Found");
      res.json(userdata);
    } else {
      console.log("user Not Found");
    }
  };
  

module.exports = {
    
    CreateUser,
    loginuser,
    GetOneuser,
    userLoginController,
    
};