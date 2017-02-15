module.exports = function (req, res, next) {
  var auth = req.headers.authorization;
  if (!auth || auth.search('JWT ') !== 0) {
    return next();
  }
  return sails.services.passport.authenticate('jwt', function (error, user, info) {
    if (error) return res.serverError(error);
    if (!user)
      return res.forbidden({ error: info.message, code: info.code })
    req.user = user;

    next();
  })(req, res);
}
