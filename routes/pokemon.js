const Router = require("express").Router
const controller = require("../controllers/pokemon")

const router = Router()

// Routes

// Index
router.get("/", controller.index)
//New
// router.get("/new", (req, res)=> controller.new)
router.get("/new", controller.new)

// destroy
router.delete("/:id", controller.destroy)
// Update
router.put("/:id", controller.update)
//create
router.post("/", controller.create)

// edit
router.get("/:id/edit", controller.edit)

// show
router.get("/:id", controller.show)


module.exports = router