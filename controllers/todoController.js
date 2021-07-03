import Todo from "../models/Todo";

export const getHome = async (req, res) => {
    const todos = await Todo.find({});
    return res.render("home", { pageTitle: "ToDoList", todos });
};

export const postHome = async (req, res) => {
    const { todoThing } = req.body;
    // console.log(todoThing);
    const todo = await new Todo({
        todoThing: todoThing,
        createdAt: Date.now(),
    });
    todo.save();
    return res.redirect("/");
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    console.log(todo);
    if (!todo) {
        return res.status(404).render("404", { pageTitle: "Video not found." });
    }
    await Todo.findByIdAndDelete(id);
    return res.redirect("/");
};

export const checkTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!check) {
        todo.check = "checked";
        return todo.save();
    }
    todo.check = "unchecked";
    return todo.save()
};
