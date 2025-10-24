import axiosInstance from "./axiosInstance"

export const createCharacter = async (data: {
    name: string
    race: string
    charClass: string
    personality: string
}) => {
    try {
        const response = await axiosInstance.post('/characters', data)
        return response 
    } catch (error) {
        if (error) {
            console.error('API error:', error)
            throw error
        } else {
            throw new Error('Network error')
        }
    }
}

export const getCharacter = async (id: string) => {
    try {
      const response = await axiosInstance.get(`/characters/${id}`)
      return response
    } catch (error) {
      if (error) {
        throw error
      } else {
        throw new Error("Network error")
      }
    }
  }