const passport = require('passport');

module.exports = app => {

  app.get('/auth/google/', passport.authenticate('google', {
      scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {

    // console.log('-- > req.user: ', req);
    // console.log('-- > res : ', res);
    console.log('-- > req.user: ', req.user);

    res.send(req.user);     // send json here or it fails..
  });
}
