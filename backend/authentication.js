const passport = require('passport');
const User = require('./models/User');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ['profile', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
        return cb(null, user);
    }
    else{
        const newUser = await User.create({ email: profile.emails[0].value, googleId: profile.id });
        console.log(newUser)
        return cb(null, newUser);
    }
  }
));

passport.serializeUser((user, cb)=>{
    cb(null, user.googleId);
});

passport.deserializeUser(async (id, cb) => {
   const user = await User.findOne({googleId: id});
   cb(null, user); 
})