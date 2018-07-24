import mongoose from 'mongoose'

const db = mongoose.connect('mongodb://pablond:pablond1@ds243041.mlab.com:43041/book-trades', (err) => {
    console.log("Database is connected !")
});

export default db