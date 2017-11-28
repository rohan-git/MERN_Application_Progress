const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

//put this user in cookie to be used for subsequent requests
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// logout or cookie expiraation ...
passport.deserializeUser((id, done) => {

  User.findById(id).then(user => {
    done(null, user);

  });
});


passport.use(
    new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {

      // console.log('accessToken:', accessToken);
      // console.log('refreshToken:', refreshToken);
      // console.log('profile:', profile);
      //console.log('accessToken:', accessToken);

      const user = await User.findOne({ googleId: profile.id });

      if(user) {
        // console.log('-- > db returned', profile.id);
        return done(null, user); // null for error info.
      }

      const newUser = await new User({ "googleId" : profile.id }).save();

      if(newUser) {
        done(null, newUser);
      }

      console.log('profile: -->', profile.id);
    }
));
