import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

export interface User extends Document {
    readonly id: any,
    readonly username: string,
    readonly email: string,
    readonly password: string
}