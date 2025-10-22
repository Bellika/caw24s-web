import OpenAI from 'openai'
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function generateCharacterImage(backstory) {
  const prompt = `
  Create a fantasy portrait of a character based on this backstory:
  '${backstory}'
  The style should be colorful fantasy.
  There should be no text in the image.
  `

  const response = await client.images.generate({
    model: 'dall-e-3',
    prompt,
    size: '1024x1024',
    n: 1,
  })

  return response.data[0].url
}