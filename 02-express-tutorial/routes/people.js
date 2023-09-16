const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonThunderClient,
  updatePerson,
  deletePerson

} = require('../controllers/peopleController');
const { route } = require("./auth");

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post('/thunderClient',createPersonThunderClient)
// router.put("/:id", updatePerson);
// router.delete("/:id",deletePerson );

router.route('/').get(getPeople).post(createPerson)
router.route('/thunderClient').post(createPersonThunderClient)
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router;
