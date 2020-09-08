const { Schema, model } = require("mongoose");

const Task = new Schema({
  user_initials: {
    type: String,
    uppercase: true,
    required: true,
  },
  case_title: {
    type: String,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  date_completed: {
    type: String,
  },
  date_deadline: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("tasks", Task);
