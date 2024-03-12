import { connect, model, Schema } from 'mongoose';
import { module } from 'mongoose';

// Connect to MongoDB
connect('mongodb://localhost:27017/Employee', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
        
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

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
module.exports = collection;