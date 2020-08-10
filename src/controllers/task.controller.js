const TASKS = require("../models/task.model");

const taskByDate = async (req, res) => {
  const tasks = await TASKS.find({
    date_deadline: new Date().toISOString(),
  }).sort({ initials: 1 });
  res.json({ message: "estas en las tareas por dia" });
};

const taskByCase = async (req, res) => {
  const { case_id } = req.body;
  const tasks = await TASKS.find({ case_id });
  res.json(tasks);
};

const taskByUser = async (req, res) => {
  const { user_id } = req.body;
  const tasks = await TASKS.find({ user_id });
  res.json(tasks);
};

const getTask = async (req, res) => {
  const task = await TASKS.findById(req.params.id);
  res.json(task);
};

const addTask = async (req, res) => {
  const { user_id, case_id, date_deadline, title, content } = req.body;
  const newTask = new Task({ user_id, case_id, date_deadline, title, content });
  await newTask.save();
  res.json("Tarea guardada");
};
const deleteTask = async (req, res) => {
  await TASKS.findByIdAndRemove(req.params.id);
  res.json("Tarea Eliminada");
};
const updateTask = async (req, res) => {
  const { user_id, case_id, date_deadline, title, content } = req.body;
  const updateTask = { user_id, case_id, date_deadline, title, content };
  await TASKS.findByIdAndUpdate(req.params.id, updateTask);
  res.json("Tarea actualizada");
};

module.exports = {
  taskByCase,
  taskByDate,
  taskByUser,
  getTask,
  deleteTask,
  addTask,
  updateTask,
};
