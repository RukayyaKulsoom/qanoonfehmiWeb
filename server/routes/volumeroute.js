var express = require("express");
var router = express.Router();
var volume = require("../Models/data")
var QanoonController = require('../controller/QanoonController')
var usercontroller = require('../controller/usercontroller')

router.get('/getallqanoon',QanoonController.Allvolume)
router.post("/createqanoon",QanoonController.Createvolume);
router.get("/getoneqanoon/:id",QanoonController.GetOnevolume);
router.put("/updateqanoon/:id",QanoonController.Updatevolume);
router.delete("/deleteqanoon/:id",QanoonController.Deletevolume);
router.post("/createmessage",QanoonController.Createmessage);
router.get('/getallmessage',QanoonController.Allmessages);
router.post("/createfeedback",QanoonController.Createfeedback);
router.delete("/deletefeedback/:id",QanoonController.Deletefeedback);
router.post("/createuser",usercontroller.CreateUser);
router.post("/loginuser",usercontroller.userLoginController);
router.get("/getoneuser/:id",usercontroller.GetOneuser);
module.exports=router