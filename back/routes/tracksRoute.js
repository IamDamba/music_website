const { Router } = require("express");
const router = Router();
const tracksController = require("../controllers/tracksController");
const Pagination = require("../middlewares/pagination");
const QueryTrack = require("../middlewares/queryTrack");
const Tracks = require("../models/Tracks");

router.get("/api/tracks/list", Pagination(Tracks), tracksController.list_get);
router.get("/api/tracks/q/", QueryTrack(Tracks), tracksController.id_get);

module.exports = router;
