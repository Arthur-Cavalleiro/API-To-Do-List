import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  checked: { type: Boolean, required: false}
})

export const TaskModel = mongoose.model("Task", TaskSchema);

export const getTasks = () => TaskModel.find();
export const getTaskById = (id: String) => TaskModel.findById(id)
export const getTaskTitle = (title: String) => TaskModel.findOne({ title })
export const getTaskDescricao = (descricao: String) => TaskModel.findOne({ descricao })
export const createTask = (values: Record<string, any>) => new TaskModel(values).save().then((task) => task.toObject());
export const deleteTaskById = (id: String) => TaskModel.findByIdAndDelete({_id: id});
export const updateTaskById = (id: String, values: Record<string,any>) => TaskModel.findByIdAndUpdate(id, values)

