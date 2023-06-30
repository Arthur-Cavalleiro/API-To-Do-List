import Express from "express";

import all from "./allServices";

const router = Express.Router();

export default (): Express.Router => {
  all(router);

  return router;
}

