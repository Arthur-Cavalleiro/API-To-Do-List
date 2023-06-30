import express from "express";
import { getTasks, deleteTaskById, createTask, getTaskTitle, getTaskById} from "../db/tasks";


export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { title, description, checked } = req.body;

    if(!title || !description) {
      return res.sendStatus(400);
    }

    const existingTitle = await getTaskTitle(title);

    if(existingTitle) {
      return res.sendStatus(400)
    }

    const task = await createTask({
      title,
      description,
      checked
    })

    return res.status(201).json(task).end();

  } catch (error) {
    console.log(error)
    return res.sendStatus(400);
  }
}

export const getAllTasks = async (req: express.Request, res: express.Response) => {
  try{
    const db = await getTasks();

    return res.status(200).json(db);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteTask = async (req: express.Request, res: express.Response) => {
  try{
    const { id } = req.params;

    const deleteTask = await deleteTaskById(id);

    return res.json(deleteTask);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateTask = async (req: express.Request, res: express.Response) => {
  try{

    const {id} = req.params;
    const { title, description, checked } = req.body;

    if(!getTaskById(id) || checked == null){
      return res.sendStatus(400);
    }

    const task = await getTaskById(id);

    task.title = title;
    task.description = description;
    task.checked = checked;
    await task.save();

    return res.status(200).json(task).end();

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}