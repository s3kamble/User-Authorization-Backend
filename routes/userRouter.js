const {Router} = require("express");
const { uploadFileName,signup, login } = require("../controllers/userController");


const router = Router();

// router.route("/signup").post(uploadFileName,signup)
router.route("/signup").post(signup)
router.route("/login").post(login)

module.exports = router;
