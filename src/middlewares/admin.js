const admin = (req, res, next) => {
  if (!user.req.admin)
    return res
      .status(403)
      .json({ message: "Sólo administradores autorizados" });

  next();
};

module.exports = admin;
