const express = require('express');
const app = express();
const port = 8088;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

let tasks = [
    {
        id: 1,
        task: "Project",
        description: "TodoList project",
        status: "Pending",
        category: "Study"
    },
    {
        id: 2,
        task: "Shopping",
        description: "Buy groceries",
        status: "Pending",
        category: "Personal"
    }
];

app.get('/', (req, res) => {

    const totalTasks = tasks.length;
    const pendingTasks = tasks.filter(t => t.status === "Pending").length;
    const progressTasks = tasks.filter(t => t.status === "In Progress").length;
    const completedTasks = tasks.filter(t => t.status === "Completed").length;

    res.render('home', {
        tasks,
        totalTasks,
        pendingTasks,
        progressTasks,
        completedTasks
    });

});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
        description: req.body.description,
        status: req.body.status,
        category: req.body.category
    };

    tasks.push(newTask);
    res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
    let task = tasks.find(t => t.id == req.params.id);
    res.render('update', { task });
});

app.post('/edit/:id', (req, res) => {

    let task = tasks.find(t => t.id == req.params.id);

    task.task = req.body.task;
    task.description = req.body.description;
    task.status = req.body.status;
    task.category = req.body.category;

    res.redirect('/');

});

// Delete Task
app.get('/delete/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});