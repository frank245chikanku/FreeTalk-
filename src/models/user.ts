import mongoose, { Schema, Document, Model } from "mongoose";   
import { authenticationService } from '../../common'


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
   
    userSchema.pre('save', async function(done) {
        if(this.isModified('password') || this.isNew) {
            const hashedpwd = authenticationService.pwdToHash(this.get('password'));
            this.set('password, hahed')
        }})
    
    done()
});


export const user: Model<IUser> = mongoose.model<IUser>("User", userSchema);
function done() {
    throw new Error("Function not implemented.");
}

