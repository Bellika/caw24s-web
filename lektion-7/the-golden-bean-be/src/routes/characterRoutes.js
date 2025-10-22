import express from 'express'
import { createCharacter, getCharacterById } from '../controllers/characterController.js'

const router = express.Router()

router.get('/:id', getCharacterById)

router.post('/', createCharacter)

export default router
