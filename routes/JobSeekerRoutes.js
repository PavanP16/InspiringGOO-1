const exp = require('express');
const router = exp.Router();


const JobSeeker_Controllers = require("../controllers/JobSeeker_c");

router.get('/',JobSeeker_Controllers.JobseekerLandingLoadUp);

router.get('/filter_page',JobSeeker_Controllers.JobseekerFilterPage);

router.post('/filter_page',JobSeeker_Controllers.JobseekerFilterPagePost);


module.exports = router;
