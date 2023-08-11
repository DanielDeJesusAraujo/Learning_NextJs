export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string
    url: string
  }[];
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Version;
}

interface VersionDetail {
  rarity: number;
  version: Version;
}

interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: VersionDetail[];
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface MoveLearnVersionGroup {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: Version;
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: MoveLearnVersionGroup[];
}

interface other {
  dream_world: {
    front_default: string;
    front_female: null;
  },
  home: {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  },
  'official-artwork': {
    front_default: string;
    front_shiny: string;
  },
  versions: {
    'generation-i': GenerationVersions;
    'generation-ii': GenerationVersions;
    'generation-iii': GenerationVersions;
    'generation-iv': GenerationVersions;
    'generation-v': GenerationVersions;
    'generation-vi': GenerationVersions;
    'generation-vii': GenerationVersions;
    'generation-viii': GenerationVersions;
  }

}

interface GenerationSprites {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: other;
}

interface GenerationVersions {
  [key: string]: GenerationSprites;
}

export interface IBaseStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface IPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: GenerationSprites;
  stats: IBaseStats[];
  types: Type[];
  weight: number;
}

export default IPokemon;
