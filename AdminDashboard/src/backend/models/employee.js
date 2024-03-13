import { model, Schema } from 'mongoose';

const newSchema = new Schema({
    // Id: {
    //     type : String,
    //     required : true
    // },
    name: {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    designation: {
        type : String,
        required : true
    },
    // Mobile: {
    //     type : Number,
    //     required : true
    // },
    // Email: {
    //     type : String,
    //     required : true
    // },
    // Gender: {
    //     type : String,
    //     required : true
    // },
    // Course: {
    //     type : Boolean,
    //     required : true
    // }
});

const empoylees = model('employees', newSchema);
export { empoylees}


// t_Employee			
// f_Id,f_Image,f_Name,f_Email,f_Mobile,f_Designation,  f_gender,f_Course,f_Createdate			