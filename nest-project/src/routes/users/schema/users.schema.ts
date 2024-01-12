import { Prop, Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

@Schema()
export class User {
    id: any;
    
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

// UserSchema.pre('save', async function (next) {
//     this //user
//     if (this.password) {
//         const salt = await bcrypt.genSalt();
//         const hash = await bcrypt.hash(this.password, salt);
//         this.password = hash;
//         next();
//     }
// })
// export interface User {
//     readonly id: any,
//     readonly username: string,
//     readonly email: string,
//     readonly password: string
// }