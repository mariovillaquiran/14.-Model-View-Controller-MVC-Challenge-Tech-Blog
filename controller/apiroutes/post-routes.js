//CREATE,EDITING,DELETING 
const router = require("express").Router();
const {post} = require("../../models/")
const withAuth = require("../../util/auth")

router.post("/",withAuth,async(req,res)=>{
    const body = req.body,
    try {
       const newpost = await post.create({
           ...body,
           userid: req.session.userid
       }) 
    } catch (err) {
        res.status(500).json(err)  
    }
})

router.put("/:id",withAuth,async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json(err)  
    }
})

router.delete("/:id",withAuth,async(req,res)=>{
    try {
        
    } catch (err) {
        res.status(500).json(err)  
    }
})

module.exports = router;
