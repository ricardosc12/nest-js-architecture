import { Document } from 'mongoose';

export interface Cats extends Document {
    readonly name: string
}