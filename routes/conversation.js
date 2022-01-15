import express from 'express'
import Conversation from "../models/conversation.js"

const router = express.Router()

// Create Conversation
router.post('/', async (req, res) => {
    try {
        const { chatName } = req.body
        const newconversation = new Conversation({
            chatName
        })
        const saveConversation = await newconversation.save()
        res.send(saveConversation)
    } catch (error) {
        res.status(500).send()
    }
})

// Read All Conversations
router.get('/', async (req, res) => {
    try {
        const conversations = await Conversation.find()

        res.send(conversations)

    } catch (error) {
        res.status(500).send()
    }
})

//Update Conversation
router.put('/:id', async (req, res) => {
    try {
        const { chatName, chatPhoto } = req.body
        const conversationID = req.params.id

        const originalConversation = await Conversation.findById(conversationID)

        originalConversation.chatName = chatName
        originalConversation.chatPhoto = chatPhoto

        const savedConverstion = await originalConversation.save()
        res.send(savedConverstion)

    } catch (error) {
        res.status(500).send()
    }
})

//Delete Conversation
router.delete('/:id', async (req, res) => {
    try {
        const conversationID = req.params.id
        const exitingConversation = await Conversation.findByIdAndDelete(conversationID)

        exitingConversation.delete()

    } catch (error) {
        res.status(500).send()
    }
})

export default router