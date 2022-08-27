const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
//Added:
const cors = require("cors");
//const corsDelete = cors({methods: "DELETE"});
//router.use(cors());

router
  .route("/:corsId")
  //.all(cors())
  .get(controller.read)
  .put(controller.update)
  //.delete(controller.delete)
  //Added:
  //.delete(cors(), controller.delete)
  //.delete(corsDelete, controller.delete)
  //.options(corsDelete)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  //Removed: .get(controller.list)
  //Added:
  .get(cors(), controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
