const { Router } = require("express");
const auth = require("../middlewares/auth");

const {
  getUser,
  getUsers,
  deleteUser,
  addUser,
  updateUser,
  login,
} = require("../controllers/user.controller");

const router = Router();

router.get("/users", getUsers);

router.get("/user/:id", auth, getUser);

router.post("/user/register", auth, addUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);

router.post("/user/login", login);

module.exports = router;
