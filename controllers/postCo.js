const Post = require("../models/postMo");

exports.CreatePost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({
            title, body
        });
        const savePost = await post.save();
        res.status(201).json({
            post: savePost,
        });
    } catch (error) {
        return res.status(401).json({
            error: "Error while creating post"
        });
    }
}

exports.GetAllApiPost = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").exec();

        res.status(201).json({
            posts,
        });
    } catch (error) {
        return res.status(403).json({
            error: "Error while fetching all api data",
        });
    };
};