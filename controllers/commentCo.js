

exports.Dummylink = (req, res) => {
    res.send("this is my demylink");
}
const Post = require("../models/postMo");
const Comment = require("../models/commentMo");

exports.CommentPost = async (req, res) => {
    try {
        const { post, user, body } = req.body;

        const comment = new Comment({
            post, user, body
        });

        const saveComment = await comment.save();

        const updatePost = await Post.findByIdAndUpdate(post,
            { $push: { comments: saveComment._id } },
            { new: true }
        ).populate("comments").exec();
        res.json({
            post: updatePost,
        });

    } catch (error) {
        return res.status(400).json({
            error: "comment error"

        });
    };
};
