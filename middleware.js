let user = true;

module.exports = {
    isAdmin: async (req, res, next) => {
      (!user) ? res.redirect('/') : next();
    }
}