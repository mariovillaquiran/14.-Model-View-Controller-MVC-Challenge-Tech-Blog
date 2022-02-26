const router = require("express").Router();
const {comment} = require("../../models/")
const withAuth = require("../../util/auth")

router.post("/",withAuth,async(req,res)=>{
    try {
      const newcomment = await comment.create({
          ...req.body,
          userid: req.session.userid
      }) 
      res.json(newcomment)  
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
