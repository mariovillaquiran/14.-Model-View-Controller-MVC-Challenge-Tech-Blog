const router = require("express").Router();
const {user} = require("../../models/");

router.post("/",async(req,res)=>{
    try {
      const newuser = await user.create({
          username: req.body.username,
          password: req.body.password
      })  
      req.session.save(()=>{
          req.session.userid = newuser.id
          req.session.udername = newuser.username
          req.session.loggedin = true
          res.json(newuser)
      })
    } catch (err) {
      res.status(500).json(err)
    }
})
module.exports = router;
