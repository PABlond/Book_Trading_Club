import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../db/models/users'

const router = express.Router();

router.post("/", (req, res) => {
    var token = req.body.data;

    var decoded = jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            res.status(201).json("bad token")
        } else {
            User.findOne({ username: data.username }, (err2, user) => {
                res.status(200).json(true)
            })
        }
    });
    console.log(decoded);


})

router.post("/signup", (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    User.findOne({ username }, (err, user) => {
        bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
            var token = jwt.sign({
                username
            }, process.env.JWT_SECRET);
            let newUser = new User({ username, password: hash });
            newUser.save(() => {

                res.status(200).json(token)
            });
        })

    })
})

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (err, user) => {
        bcrypt.compare(password, user.password, function (err2, isSuccess) {
            if (isSuccess) {
                var token = jwt.sign({
                    username
                }, process.env.JWT_SECRET);
                res.status(200).json(token)

            } else {
                res.status(401).json(false);
            }

        })

    })
})

router.get("/secret", (req, res) => {
    res.json('SECRET PAGE !!')
})


export default router