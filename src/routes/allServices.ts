import express from "express";

import { register, getAllTasks, deleteTask, updateTask} from "../controllers/services";

export default (router: express.Router) => {
  router.post('/newTask', register);
  router.get('/List', getAllTasks);
  router.delete('/Task/:id', deleteTask);
  router.patch('/update/:id', updateTask);
}