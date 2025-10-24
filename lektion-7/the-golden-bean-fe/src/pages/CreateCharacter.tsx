import { useForm } from "react-hook-form"
import { useState } from "react"
import { createCharacter } from "../services/characterApi"
import type { Character } from "../types/Character"
import '../styles/global.css'

interface FormValues {
    name: string,
    race: string,
    charClass: string,
    personality: string
}

const CreateCharacter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [loading, setLoading] = useState(false);
    const [character, setCharacter] = useState<Character | null>(null);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: FormValues) => {
        setLoading(true);
        setError(null);
        setCharacter(null);

        try {
            const res = await createCharacter(data);
            setCharacter(res.data);
        } catch (err) {
            console.error(err);
            setError("Failed to create character");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2 className="panel">Create Character</h2>

            {!character && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Name:</label>
                        <input {...register("name", { required: "Name is required" })} />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label>Race:</label>
                        <select {...register("race", { required: "Race is required" })}>
                            <option value="">Select...</option>
                            <option value="Human">Human</option>
                            <option value="Elf">Elf</option>
                            <option value="Orc">Orc</option>
                            <option value="Goblin">Goblin</option>
                        </select>
                        {errors.race && <p>{errors.race.message}</p>}
                    </div>

                    <div>
                        <label>Class:</label>
                        <select {...register("charClass", { required: "Class is required" })}>
                            <option value="">Select...</option>
                            <option value="Warrior">Warrior</option>
                            <option value="Mage">Mage</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Bard">Bard</option>
                        </select>
                        {errors.charClass && <p>{errors.charClass.message}</p>}
                    </div>

                    <div>
                        <label>Personality:</label>
                        <textarea {...register("personality", { required: "Personality is required" })} />
                        {errors.personality && <p>{errors.personality.message}</p>}
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? "Generating..." : "Create Character"}
                    </button>
                </form>
            )}

            {loading && <p>Loading...</p>}

            {error && <p>{error}</p>}

            {character && (
                <div className="panel char-preview">
                    <h3>{character.name}</h3>
                    <p>{character.race} {character.charClass}</p>
                    <img className="pixel-img" src={character.imageUrl} alt={character.name} />
                    <p>{character.backstory}</p>
                </div>
            )}
        </div>
    )
}

export default CreateCharacter