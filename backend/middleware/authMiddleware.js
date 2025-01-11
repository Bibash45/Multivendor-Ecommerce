const jwt = require("jsonwebtoken");
const { responseReturn } = require("../utils/response");

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return responseReturn(res, 409, {
      error: "Please Login first",
    });
  } else {
    try {
      const decodeToken = await jwt.verify(accessToken, process.env.SECRET);
      req.role = decodeToken.role;
      req.id = decodeToken.id;
      next();
    } catch (error) {
      return responseReturn(res, 409, {
        error: "Please Login !!",
      });
    }
  }
};
