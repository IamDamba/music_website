const {Router} = require('express');
const router = Router();
const tracksController = require('../controllers/tracksController');
const Pagination = require('../middlewares/pagination');
const Tracks = require('../models/Tracks');

router.get('api/tracks/list', Pagination(Tracks), tracksController.list_get);

module.exports = router;