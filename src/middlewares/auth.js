const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).json({ message: "Usuario no autorizado" });

  try {
    const decoded = jwt.verify(token, "jwtSecret");
    req.user = decoded;
    next();
  } catch {
    return res.status(400).json({ message: "El token no es válido" });
  }
};

module.exports = auth;
