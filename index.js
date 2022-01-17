import express, { json } from 'express';
import conversationRoutes from './routes/conversation.js'
import  mongoose  from 'mongoose';
import  dotenv  from 'dotenv';
import cors from 'cors'
//ENV
dotenv.config()

// Setup Server
const app = express()
const Port = process.env.Port||8000 
app.use(cors())
app.use(json())
app.listen(Port, () => console.log(`Server running on ${Port}`))
app.use('/conversation', conversationRoutes)

// MongoDB Connection
 mongoose.connect(process.env.MONGODB_STRING_URL,{
     useNewurlParser: true,
     useUnifiedTopology: true,
 },(err) => {
     if (err) return console.log(err)
     console.log("Connected to MongoDB")
 })
