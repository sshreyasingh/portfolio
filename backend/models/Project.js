const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  techStack: [String],
  features: [String],
  liveLink: String,
  githubLink: String
});

module.exports = mongoose.model('Project', projectSchema);