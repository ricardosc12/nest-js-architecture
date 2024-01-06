import { Document } from 'mongoose';

export interface Dogs extends Document {
    readonly name: string
}