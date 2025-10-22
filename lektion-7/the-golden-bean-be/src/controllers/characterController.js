import Character from '../models/Character.js'
import { generateBackstory } from '../services/generateBackstory.js'
import { generateCharacterImage } from '../services/characterImage.js';

export async function getCharacterById(req, res) {
    const { id } = req.params;
  
    try {
      const character = await Character.findById(id);
  
      if (!character) {
        return res.status(404).json({ error: 'Character not found' });
      }
  
      res.status(200).json(character);
    } catch (err) {
      console.error('Error getting character', err);
      res.status(500).json({ error: 'Error getting character' });
    }
  }
  

export const createCharacter = async (req, res) => {
    const { name, race, charClass, personality } = req.body

    try {
        const aiData = await generateBackstory({ name, race, charClass, personality })

        const imageUrl = await generateCharacterImage(aiData.backstory)

        const newChar = await Character.create({
            name,
            race,
            charClass,
            personality,
            backstory: aiData.backstory,
            stats: aiData.stats,
            imageUrl
        })

        await newChar.save()
        res.status(201).json(newChar)
    } catch (error) {
        console.error('Character creation error:', error)
        res.status(500).json({ error: 'Could not create character'})
    }
}