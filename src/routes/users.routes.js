const { Router } = require("express");
const auth = require("../middlewares/auth");

const {
  getUser,
  getUsers,
  deleteUser,
  addUser,
  updateUser,
  login,
  verifyToken,
  getUserData,
} = require("../controllers/user.controller");

const router = Router();

router.get("/users", getUsers);

router.get("/user/:id", getUser);

router.post("/user/register", auth, addUser); //protected

router.delete("/user/:id", deleteUser); //protected

router.put("/user/:id", updateUser); //protected

router.post("/user/login", login);

router.post("/verify-token", verifyToken);

router.get("/user-data", auth, getUserData);

module.exports = router;
