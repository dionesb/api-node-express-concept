const express = require("express");

const server = express();
server.use(express.json());

const projects = [
  {
    id: "1",
    title: "Novo projeto",
    tasks: []
  }
];

var reqCont = 1;

// glboal midware
server.use((req, res, next) => {
  console.log(`Number of requests ${reqCont++}`);
  next();
});

function checkIdExist(req, res, next) {
  const id = req.params.id;
  const project = projects.find(obj => obj.id === id);

  if (!project) {
    return res.status(400).json({ error: "project does not exists" });
  }

  req.project = project;
  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.get("/projects/:id", checkIdExist, (req, res) => {
  // const { id } = req.params;

  // const project = projects.find(obj => obj.id == id);

  return res.json(req.project);
});

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  return res.json(projects);
});

server.put("/projects/:id", checkIdExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(obj => obj.id === id);
  project.title = title;

  return res.json(project);
});

server.post("/projects/:id/tasks", checkIdExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(obj => obj.id === id);
  project.tasks.push(title);

  return res.json(project);
});

server.delete("/projects/:id", checkIdExist, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(obj => obj.id === id);
  projects.splice(index, 1);

  return res.send();
});

server.listen(3000);
