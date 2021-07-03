import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoThing: { type: String, required: true, trim: true, maxLength: 40 },
    createdAt: { type: Date, required: true, default: Date.now },
    check: { type: String, required: true, default: "unchecked" },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;