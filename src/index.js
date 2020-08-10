const express = require("express");

const app = express();
require("./database");
app.set("port", 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", require("./routes/cases.routes"));
app.use("/api", require("./routes/tasks.routes"));
app.use("/api", require("./routes/users.routes"));

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log("listen on port", PORT);
});
