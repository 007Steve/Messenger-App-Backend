import express, { json } from 'express';
import conversationRoutes from './routes/conversation.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
//ENV
dotenv.config()

// Setup Server
const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(json())
app.listen(port, () => console.log(`Server running on ${port}`))
app.use('/conversation', conversationRoutes)

// MongoDB Connection
mongoose.connect(process.env.MONGODB_STRING_URL, {
    useNewurlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) return console.log(err)
    console.log("Connected to MongoDB")
})
