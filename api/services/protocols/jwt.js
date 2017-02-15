module.exports.login = function(payload, next) {
  var query;
  query = {
    email: payload.user.email
  };
  return sails.models.user.findOne(query)
  .then(function(user) {
    if (!user) {
      return next(null, false);
    }
    return next(null, user);
  })
  .catch(function(err){
    return next(err);
  });
};
