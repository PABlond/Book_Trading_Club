import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../db/models/users'
const router = express.Router();

router.post("/", (req, res) => {
    User.find({}, (err, users) => {
        let arr = [];
        users.map(user => {
            if (user.books.length > 0) {
                user.books.map(book => {
                    return (
                        arr.push({
                            book,
                            username: user.username
                        })
                    )
                })
            }
        });
    res.status(200).json(arr);
})
})

router.post("/user", (req, res) => {
    const {token} = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(201).json(false)
        } else {
            User.findOne({ username: data.username }, (err2, user) => {
                res.status(200).json(user.books)
            })
        }
    });
})

router.post("/add", (req, res) => {
    const { name, author, description, token } = req.body;
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
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
                    res.status(200).json(user.books)

                })
            })
        }
    });
})

router.post("/to-trade", (req, res) => {
    res.status(200).json("OK")
})

router.post("/trade", (req, res) => {
    console.log(req.body);
    res.status(200).json(true)
})

router.post("/remove", (req, res) => {
    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(201).json(false)
        } else {
         const book = User.findOne({username: data.username}, (err, user) => {
             
            let userBooks = [];
            user.books.map(book => {
                const willPush = book._id != req.body.id ? true : false;
                if(willPush) {
                  return  userBooks.push(book);
                } else {
                    return;
                }
            });
            console.log(userBooks)
            user.books = userBooks;
            user.save(() => {
                res.status(200).json(user)
            });
            
         });
        }
    });
    
})

export default router