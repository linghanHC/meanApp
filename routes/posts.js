const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

// router.get('/', (req, res) => {
//     res.send('we are on posts page');
// });

// async way
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// router.post('/', (req, res) => {
//     // console.log(req.body);
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     // post.save() returns a Promise
//     post.save().then(data => {
//         res.json(data)
//     }).catch(err => {
//         res.json({ message: err })
//     })

// });

// async way
router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
});

// get a specific post
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        console.log(err);
        res.json({ message: err })
    }
});

// delete a specific post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        console.log(err);
        res.json({ message: err })
    }
});

// update a specific post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedPost);
    } catch (err) {
        console.log(err);
        res.json({ message: err })
    }
});

module.exports = router;