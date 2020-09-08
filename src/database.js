const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/agenda-juridica", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err.message));
