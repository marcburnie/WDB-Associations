const mongoose = require("mongoose");

//POST - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});

module.exports = mongoose.model("Post", postSchema);