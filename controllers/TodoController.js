const TodoModel = require("../models/TodoModel");

module.exports.getTodo = async (req, res) => {
    const todo = await TodoModel.find();
    res.send(todo);
}

module.exports.saveTodo = (req, res) => {
    const data = req.body;
    TodoModel
        .create({title:data["title"],desc:data["desc"]})
        .then((data) => {
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteTodo = (req, res) => {
    const id = req.body["_id"];

    TodoModel
        .findByIdAndDelete(id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateTodo = (req, res) => {
    const data = req.body;
    console.log(data);

    TodoModel
        .findByIdAndUpdate(data["_id"], { "title": data["title"] , "desc" : data["desc"]})
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}