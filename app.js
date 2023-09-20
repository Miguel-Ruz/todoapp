const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const tasks = []; // Almacenar las tareas en un array

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.get('/delete/:index', (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
