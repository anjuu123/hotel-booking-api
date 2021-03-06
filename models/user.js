import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required: 'name is required'
    },

    email:{
        type:String,
        trim:true,
        required: 'email is required',
        unique:true,
    },

    password:{
        type:String,
        required:true,
        min:6,
         max:64
    },

    stripe_account_id:'',
    stripe_seller:{},
    stripeSession:{}
}, {timestamps:true}
);

export default mongoose.model('User', userSchema);