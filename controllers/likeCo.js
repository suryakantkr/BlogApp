const Post = require("../models/postMo");
const Like = require("../models/likeMo");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        const like = new Like({
            post,
            user,
        });

        const savedLike = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        )
            .populate("likes")
            .exec();

        res.json({
            post: updatedPost,
        });
    } catch (error) {
        console.error("Like error:", error.message);
        return res.status(404).json({
            error: "Error while fetching likes",
        });
    }
};



exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;

        const deletedLike = await Like.findOneAndDelete(like);

        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $pull: { likes: deletedLike._id } },
            { new: true }
        ).populate("likes");

        res.status(202).json({
            post: updatedPost,
        });
    } catch (error) {
        console.error("Unlike error:", error.message);
        return res.status(500).json({
            error: "Error while processing unlikes",
        });
    };
};
