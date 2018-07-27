import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 10;

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    books: [
        {
            name: String,
            author: String,
            name: String,
            description: String,
            want: [{
                person: String,
                status: Boolean,
                exchangeWith: String                
            }]
        }
    ]
});

export default mongoose.model('users', usersSchema);