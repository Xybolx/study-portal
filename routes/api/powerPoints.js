const router = require("express").Router();
const powerPointsController = require("../../controllers/powerPointsController");

// Matches with "/api/powerPoints"
router
  .route("/")
  .get(powerPointsController.findAll)
  .post(powerPointsController.create);

// Matches with "/api/powerPoints/:id"
router
  .route("/:id")
  .get(powerPointsController.findById)
  .put(powerPointsController.update)
  .delete(powerPointsController.remove);

module.exports = router;