const express = require("express");
const router = express.Router();

const { Dummylink, CommentPost } = require("../controllers/commentCo");
const { CreatePost, GetAllApiPost } = require("../controllers/postCo");
const { likePost, unlikePost } = require("../controllers/likeCo");

router.get("/dummy", Dummylink);
router.get("/allpost", GetAllApiPost);
router.post("/comment", CommentPost);
router.post("/posts/create", CreatePost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;