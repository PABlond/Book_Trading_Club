import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_WORK_FACTOR = 10;

const usersSchema = new mongoose.Schema({
    username:String,
    password:String
});

export default mongoose.model('users', usersSchema);