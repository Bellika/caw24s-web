import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    race: { type: String, required: true },
    charClass: { type: String, required: true },
    personality: { type: String },
    backstory: { type: String },
    stats: {
        hp: { type: Number, default: 20 },
        xp: { type: Number, default: 0 },
        gold: { type: Number, default: 0 },
    },
    progress: {
        step: { type: Number, default: 1},
        goalFound: { type: Boolean, default: false },
    },
    imageUrl: { type: String }
}, { timestamps: true })

export default mongoose.model('Character', characterSchema)