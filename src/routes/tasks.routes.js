const { Router } = require("express");

const {
  taskByCase,
  taskByDate,
  taskByUser,
  getTask,
  addTask,
  deleteTask,
  updateTask,
  toggleCompletedTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/tasks-by-date", taskByDate);

router.get("/tasks-by-case", taskByCase);

router.get("/tasks-by-user", taskByUser);

router.get("/task/:id", getTask);

router.post("/task", addTask); //protected

router.post("/toggleCompletedTask", toggleCompletedTask);

router.delete("/task/:id", deleteTask); //protected

router.put("/task/:id", updateTask); //protected

module.exports = router;
