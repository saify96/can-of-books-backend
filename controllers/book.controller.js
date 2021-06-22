'use strict';

const {userModel} = require('../models/user.model');

const getBooks = (req,res)=>{
    const {email} = req.query;
    // console.log(email);
    userModel.find({ email: email }, (error, user) => {
        if (error) {
            res.send(error)
        } else {
            res.send(user)
        }
    });
}

const createBook = (req,res)=>{
    const {userEmail,bookName,bookDesc,bookStatus} = req.body;
    userModel.findOne({email :userEmail} , (error,userData)=>{
        if(error){
            res.send(error);
        }
        else{
            console.log(userData)
            userData.books.push({name:bookName,description:bookDesc,status:bookStatus});
            userData.save();
            res.json(userData);        
        }
    })
}

const updateBook = (req,res)=>{
    const bookIndex = req.params.book_idx;
    const {userEmail,bookName,bookDesc,bookStatus} = req.body;
    userModel.findOne({email :userEmail} , (error,userData)=>{
        if(error){
            res.send(error);
        }
        else{
            userData.books.splice(bookIndex,1,{name:bookName,description:bookDesc,status:bookStatus});
            userData.save();
            res.json(userData);        
        }
    })
}

const deleteBook = (req,res)=>{
    const bookIndex = req.params.book_idx;
    const {userEmail} = req.query;
    userModel.findOne({email :userEmail} , (error,userData)=>{
        if(error){
            res.send(error);
        }
        else{
            userData.books.splice(bookIndex,1);
            userData.save();
            res.json(userData);        
        }
    })
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};
