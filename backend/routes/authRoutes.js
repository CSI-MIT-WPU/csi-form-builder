const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get("/google", passport.authenticate("google", {scope: ["email", "profile"]}));

/*router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:5173/home",                        TODOs
    failureRedirect: "/failed"                                        //  ADD jwt 
}));*/                                                               //   ADD jwt middleware for http://localhost:5173/home

router.get("/google/callback", (req, res, next) => {
    passport.authenticate("google", (err, { user, token }) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        if (!user) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        res.cookie('accessToken', token, { httpOnly: true, secure: true });
        res.redirect('http://localhost:5173/home');
    })(req, res, next);
});

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