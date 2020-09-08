const USERS = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  const user = await USERS.findById(req.params.id);
  res.json(user);
};

const getUsers = async (req, res) => {
  const users = await USERS.find();
  res.json(users);
};

const addUser = async (req, res) => {
  const { name, email, password, initials, admin } = req.body;
  const user = new USERS({
    name,
    email,
    password,
    initials,
    admin,
  });
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user.password = hash;
  await user.save();
  const token = await jwt.sign(
    { id: user.id, admin: user.admin },
    "jwtSecret",
    {
      expiresIn: "12h",
    }
  );
  res.status(201).json({ message: "Usuario guardado", token });
};

const deleteUser = async (req, res) => {
  await USERS.findByIdAndRemove(req.params.id);
  res.json("usuario eliminado");
};

const updateUser = async (req, res) => {
  const { name, email, password, initials, admin } = req.body;
  const updateUser = { name, email, password, initials, admin };
  await USERS.findByIdAndUpdate(req.params.id, updateUser);
  res.json("usuario actualizado");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "por favor, completa todos los campos" });

  const user = await USERS.findOne({ email });
  if (!user) return res.status(400).json({ message: "El usuario no existe" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ message: "contraseña incorrecta" });
  const token = await jwt.sign(
    { id: user.id, admin: user.admin },
    "jwtSecret",
    {
      expiresIn: "12h",
    }
  );
  res.json({ message: "Login Correcto", token, user });
};

const verifyToken = async (req, res) => {
  const { token } = req.body;
  const decoded = jwt.verify(token, "jwtSecret");
  res.json(decoded);
};
const getUserData = async (req, res) => {
  const user = await USERS.findById(req.user.id);
  res.json({
    name: user.name,
    email: user.email,
    initials: user.initials,
    admin: user.admin,
  });
};

module.exports = {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  login,
  verifyToken,
  getUserData,
};
