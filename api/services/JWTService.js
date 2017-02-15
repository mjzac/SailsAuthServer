var jwt = require('jsonwebtoken');

module.exports = {
  createToken: function createToken(user) {
    return jwt.sign({
        user: user.toJSON()
      },
      sails.config.passport.jwt.options.secretOrKey,
      {
        algorithm: sails.config.passport.jwt.algorithm,
        expiresIn: sails.config.passport.jwt.options.expiresIn,
        issuer: sails.config.passport.jwt.options.issuer,
        audience: sails.config.passport.jwt.options.audience
      }
    );
  }
}
