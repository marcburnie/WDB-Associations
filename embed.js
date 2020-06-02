const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Blog", {useNewUrlParser: true});

//POST - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});
const Post = mongoose.model("Post", postSchema);

//USER - email, name
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// const newUser = new User ({
// 	email: "harrypotter@hogwarts.edu",
// 	name: "Harry Potter"
// })

// newUser.posts.push({
// 	title: "How to brew polyjuice potion",
// 	content: "Just kidding - go to class"
// })

// newUser.save( function (err, user) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// const newPost = new Post({
// 	title: "Reflections on Apples",
// 	content: "They are delicious and nutritious."
// })

// newPost.save( function (err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post)
// 	}
// })

User.findOne({name: "Harry Potter"}, function (err, user){
	if (err) {
		console.log(err);
	} else {
		user.posts.push({
			title: "3 things I really hate",
			content: "Voldemort, Voldemort, Voldemort"
		})
		user.save(function (err, user){
			if (err) {
				console.log(err);
			} else {
				console.log(user);
			}
		})
	}
})