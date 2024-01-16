import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

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

export const UserSchema = SchemaFactory.createForClass(User)

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