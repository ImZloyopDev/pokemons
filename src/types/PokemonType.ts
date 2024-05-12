export interface IPokemonsResponce {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPokemonsResponceDetails {
    name?: string;
    sprites?: pokemonSprite;
}

export interface pokemonSprite {
    front_default?: string;
}