const express = require("express");
const cors = require('cors')

const app = express();
require("./database");
app.set("port", 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors())

app.use("/api", require("./routes/cases.routes"));
app.use("/api", require("./routes/tasks.routes"));
app.use("/api", require("./routes/users.routes"));

const PORT = app.get("port");
app.listen(PORT, () => {
  console.log("listen on port", PORT);
});
