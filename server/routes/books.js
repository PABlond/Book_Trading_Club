import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../db/models/users'
const router = express.Router();

router.post("/add", (req, res) => {
    const { name, author, description, token } = req.body;
    var decoded = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(201).json(false)
        } else {
            User.findOne({ username: data.username }, (err2, user) => {
                let userBooks = user.books;
                userBooks.push({
                    name, author, description
                });
                user.books = userBooks;
                user.save((err) => {
                    if (err) res.status(404).json(false)
                    res.status(200).json(true)

                })                
            })
        }
    });
})

export default router