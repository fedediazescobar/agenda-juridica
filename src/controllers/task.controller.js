const TASKS = require("../models/task.model");

const taskByDate = async (req, res) => {
  const { date } = req.params;
  const tasks = await TASKS.find({
    date_deadline: date,
  }).sort({ user_initials: 0 });
  res.json(tasks);
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
  const { user_initials, case_title, date_deadline, title, content } = req.body;
  const newTask = new TASKS({
    user_initials,
    case_title,
    date_deadline,
    title,
    content,
  });
  await newTask.save();
  res.json({ message: "Tarea guardada" });
};
const deleteTask = async (req, res) => {
  await TASKS.findByIdAndRemove(req.params.id);
  res.json({ message: "Tarea Eliminada" });
};
const updateTask = async (req, res) => {
  const { user_id, case_id, date_deadline, title, content } = req.body;
  const updateTask = { user_id, case_id, date_deadline, title, content };
  await TASKS.findByIdAndUpdate(req.params.id, updateTask);
  res.json("Tarea actualizada");
};

const toggleCompletedTask = async (req, res) => {
  const { id, completed, date_completed } = req.body;
  await TASKS.findByIdAndUpdate(id, {
    $set: { completed: !completed, date_completed },
  });
  res.json({ message: "Tarea hecha" });
};

module.exports = {
  taskByCase,
  taskByDate,
  taskByUser,
  getTask,
  deleteTask,
  addTask,
  updateTask,
  toggleCompletedTask,
};
