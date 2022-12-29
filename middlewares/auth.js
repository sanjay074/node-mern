const jwt = require("jsonwebtoken");
import CustomErrorHandler from "../services/CustomErrorHandler";
const verifyToken = (req, res, next) => {
  let authHeader = req.header("authorization");
  if (authHeader) {
    authHeader = authHeader.split(" ");
    const token = authHeader[1];
    if (!token) {
      return res
        .status(403)
        .send({ message: "A token is required for authentication" });
    }
    try {
      const getuser = jwt.verify(token, process.env.JWT_SER);
      req.user = getuser;
      next();
    } catch (err) {
      return res.status(401).send({ message: "Token is not valid!" });
    }
  } else {
    return res
      .status(403)
      .send({ message: "A token is required for authentication" });
  }
};

const verifyTokenAndUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id) {
      next();
    } else {
      return next(CustomErrorHandler.unAuthorized("You are not  user."));
    }
  });
};

module.exports = {
  verifyTokenAndUser,
  verifyToken,
};
