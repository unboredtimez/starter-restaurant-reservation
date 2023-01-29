/**
 * Defines the router for table resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./tables.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// Default route
router.route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

// Route for table_id/seat
router.route("/:table_id/seat")
  .put(controller.seat)
  .delete(controller.unseat)
  .all(methodNotAllowed);

module.exports = router;
