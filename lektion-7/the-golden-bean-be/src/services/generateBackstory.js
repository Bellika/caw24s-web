import OpenAI from 'openai'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function generateBackstory({ name, race, charClass, personality }) {
    const promt = `
        Create a fantasy character in the world "The Quest for the Golden Bean".
        Name: ${name}
        Race: ${race}
        Character Class: ${charClass}
        Personality: ${personality}

        Write a short background story (maximum 100 words) and suggest good
        startingvalues for stats, return the answer as JSON:
        {
            "backstory": "...",
            "stats": { "hp": number, "xp": 0 }
        }
    `

    const completion = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: promt}]
    })

    const result = completion.choices[0].message.content

    try {
        return JSON.parse(result)
    } catch (error) {
        return { backstory: result, stats: { hp: 20, xp: 0 }}
    }
}