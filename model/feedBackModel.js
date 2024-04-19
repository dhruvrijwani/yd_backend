import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },
  
    message: {
        type: String,
        required: true
    }
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;