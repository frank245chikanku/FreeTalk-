import mongoose, { Schema, Document, Model } from "mongoose";


export interface IUser extends Document {
    email: string;
    password: string;
    posts: mongoose.Types.ObjectId[];
}


const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});


userSchema.pre<IUser>("save", async function (next) {
    
    next();
});


export const user: Model<IUser> = mongoose.model<IUser>("User", userSchema);
