import mongoose from 'mongoose'


const conversationSchema = new mongoose.Schema({
    chatName: String,
    chatPhoto: String,
    conversation: [
        {
            message: String,
            timestamps: String,
            user: {
                name: String,
                email: String,
                photo: String,
                uid: String
            }
        }
    ]
})

export default mongoose.model('conversations', conversationSchema)