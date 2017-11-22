const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) =>
    {
          // console.log('accessToken:', accessToken);
          // console.log('refreshToken:', refreshToken);
          // console.log('profile:', profile);
          //console.log('accessToken:', accessToken);

          User.findOne({googleId: profile.id}).then((user) => {
            if(!user){
              new User({ "googleId" : profile.id }).save();
            }
          });

          console.log('profile: -->', profile.id);
    })
);
