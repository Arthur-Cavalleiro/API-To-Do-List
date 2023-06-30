import express from "express";

import { register, getAllTasks, deleteTask, updateTask, getOneTask} from "../controllers/services";

export default (router: express.Router) => {
  router.get('/List', getAllTasks);
  router.get('/ListOne/:id', getOneTask);
  router.post('/newTask', register);
  router.delete('/Task/:id', deleteTask);
  router.patch('/update/:id', updateTask);
}