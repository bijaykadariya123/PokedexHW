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
router.delete("/:id", (req, res)=>{
    res.send("not implemented yet") 
})
// Update
router.put("/:id", controller.update)
//create
router.post("/", controller.create)

// edit
router.get("/:id/edit", controller.edit)

// show
router.get("/:id", controller.show)


module.exports = router