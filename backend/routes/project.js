const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// POST /api/projects (for admin to add projects)
router.post('/', async (req, res) => {
  const { name, description, techStack, features, liveLink, githubLink } = req.body;
  try {
    const newProject = new Project({ name, description, techStack, features, liveLink, githubLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add project' });
  }
});

module.exports = router;