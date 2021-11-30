const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(401).json({
        message: "You need to be logged in to perform this operation",
      });

    const myUserId = jwt.decode(token);
    
    req.myUserId = myUserId;

    return next();
  });
};
