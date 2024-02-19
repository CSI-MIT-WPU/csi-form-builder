const passport = require('passport');
const User = require('./models/User');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
const jwt = require("jsonwebtoken");

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ['profile', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {
    const user = await User.findOne({ googleId: profile.id });
    if (user) {
      const token = await generateToken(profile.id);
      console.log(token);
      return cb(null, {user, token});
    }
    else{
        const newUser = await User.create({ email: profile.emails[0].value, googleId: profile.id });
        const token = await generateToken(profile.id);
        return cb(null, {user: newUser, token});
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

const generateToken = (googleId) => {
  return new Promise((resolve, reject) => {
    jwt.sign(googleId, `${process.env.JWT_TOKEN}`, {expiresIn:'24h'}, (err, token) => {
      if (err) {
        reject(err);
      }
      else{
        resolve(token);
      }
    });
  });
}