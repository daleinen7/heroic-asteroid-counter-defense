const User = require('../../models/user');
const jwt = require('jsonwebtoken')

module.exports = {
  create
};

async function create(req,res) {
  try {
    // add user to db
    const user = await User.create(req.body);
    // create a token
    const token = createJWT(user);

    res.json(token);
  } catch (err) {
    // client check for non-2xx status code
    res.status(400).json(err);
  }
}

// Helper Function
function createJWT(user) {
  return jwt.sign(
    {user},
    process.env.SECRET,
    {expiresIn: '24h'}
  )
}