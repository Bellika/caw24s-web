export interface Stats {
    hp: number;
    xp: number;
    gold?: number;
}
  
  export interface Progress {
    step: number;
    goalFound: boolean;
}
  
  export interface Character {
    _id: string;
    name: string;
    race: string;
    charClass: string;
    personality: string;
    backstory: string;
    stats: Stats;
    progress: Progress;
    imageUrl: string;
    createdAt: string;
}
  