const Router = require("express").Router
const controller = require("../controllers/pokemon")

const router = Router()

// Routes

// Index
router.get("/", controller.index)
//New
router.get("/new", (req, res)=> controller.new)

// destroy
router.delete("/:id", (req, res)=>{
    res.send("not implemented yet") 
})
// Update
router.put("/:id", (req,res)=>{
    res.send("not implemented yet")
})
//create
router.post("/", (req, res)=>{
    res.send("not implemented yet")
})

// edit
router.get("/:id/edit", (req, res)=>{
    res.send("not implemented yet")
})

// show
router.get("/:id", controller.show)


module.exports = router