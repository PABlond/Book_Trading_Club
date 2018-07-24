import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from './../db/models/users'

const router = express.Router();

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        
    res.json(users)
    })
})

router.post("/signup", (req, res) => {
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        var token = jwt.sign({
            username: req.body.username
          }, process.env.JWT_SECRET);
        res.json({
            token: token,
            username: req.body.username
        })
      });
})

router.post("/login", (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

export default router