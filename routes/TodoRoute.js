const {Router} = require("express");
const { getTodo, saveTodo, deleteTodo, updateTodo} = require("../controllers/TodoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveTodo);
router.post("/delete", deleteTodo);
router.post("/update", updateTodo);
 
module.exports = router;     