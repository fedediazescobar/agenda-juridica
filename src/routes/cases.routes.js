const { Router } = require("express");
const auth = require("../middlewares/auth");

const {
  getCase,
  deleteCase,
  updateCase,
  addCase,
} = require("../controllers/case.controller");

const router = Router();

router.get("/case/:id", getCase);

router.post("/case", auth, addCase);

router.delete("/case/:id", deleteCase);

router.put("/case/:id", updateCase);

module.exports = router;
