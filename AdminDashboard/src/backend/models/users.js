import { model, Schema } from 'mongoose';

const newSchema = new Schema({
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
});

const collection = model('collection', newSchema);
export { collection}