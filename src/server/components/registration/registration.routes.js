var express = require('express');
var router = express.Router();

router.use('/school', require('./school/school.routes'));
router.use('/referee', require('./referee/referee.routes'));
router.use('/competitor', require('./competitor/competitor.routes'));

module.exports = router;
