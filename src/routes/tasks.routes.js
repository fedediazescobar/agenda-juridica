const { Router } = require("express");

const {
  taskByCase,
  taskByDate,
  taskByUser,
  getTask,
  addTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/tasks-by-date", taskByDate);

router.get("/tasks-by-case", taskByCase);

router.get("/tasks-by-user", taskByUser);

router.get("/task/:id", getTask);

router.post("/task/:id", addTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);

module.exports = router;
