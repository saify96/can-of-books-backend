const mongoose = require('mongoose');
const bookSchema = require('./book.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});
const userModel = mongoose.model('users',userSchema)

const seedUserData = ( ) => {
const newUser= new userModel ({
    email:'mohammad.alsaify@gmail.com',
    books:[
        {
            name: 'math',
            description: 'math',
            status: '1'
        },
        {
            name: 'math',
            description: 'math',
            status: '2'
        },
        {
            name: 'math',
            description: 'math',
            status: '3'
        }
    ]    
})
console.log(newUser);
newUser.save();
}

module.exports = userModel;
