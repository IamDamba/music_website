const { Router } = require("express");
const router = Router();
const authController = require("../controllers/authController");

router.get("/api/currentuser", authController.currentuser_get);
router.get("/api/signin", authController.sigin_post);
router.get("/api/signup", authController.sigin_post);
router.get("/api/signout", authController.signout_get);
router.get("/api/deleteaccount", authController.deleteaccount_get);

module.exports = router;
