const passport = require('passport');
const User = require('./models/User');
const jwt = require("jsonwebtoken");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();

passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ['profile', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({ email: profile.emails[0].value, googleId: profile.id });
        }
        jwt.sign({ email:user.email }, process.env.JWT_SECRET, {expiresIn: '24h'}, (err, token)=>{
          if (err) {
            return cb(err, null);
          }
          console.log(token);
          return cb(null, {user, token});
        });
      } catch (error) {
        return cb(error, null);
    }
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));