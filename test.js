const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/nodejs-test-blog', { useNewUrlParser: true })

// insert
// Post.create({
//     title: 'My first blog post',
//     description: 'Blog post description',
//     content: 'Lorem ipsum content.'
// }, (error, post) => {
//     console.log(error, post)
// })

// read
// Post.find({
//     title: 'My first blog post'
// }, (error, post) => {
//     console.log(error, post)
// })

// read by id
// Post.findById('5cb4c980043eaa2d80860177', (error, post) => {
//     console.log(error, post)
// })


// update
Post.findOneAndUpdate('5cb4c980043eaa2d80860177', {
    title: 'My First Post updated'
}, (error, post) => {
    console.log(error, post)
})

