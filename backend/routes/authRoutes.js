const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/google", passport.authenticate("google", {scope: ["email", "profile"]}));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/auth/success",
    failureRedirect: "/failed"
}));

router.get("/success", (req, res) => {
    if (req.user) {
        res.status(200).json({user:req.user})
    }
    else{
        res.status(401).json({message:"Failed"});
    }
})

router.get("/failed", (req, res)=>{
    res.status(401).json({message: "Failed"});
});

module.exports = router;