// mangoDB model
const mongoose = require('mongoose');

// model schedma to describe how does the model look like
// const PostSchema = mongoose.Schema({
//     title: String,
//     description: String,
//     date: Date.now
// })

// or more specific
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', PostSchema);