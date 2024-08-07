import { TranslationEntries } from "#app/interfaces/locales";

export const challenges: TranslationEntries = {
  "title": "チャレンジ じょうけん せってい",
  "illegalEvolution": "{{pokemon}} changed into an ineligble pokémon\nfor this challenge!",
  "singleGeneration": {
    "name": "Mono Gen",
    "desc": "You can only use Pokémon from Generation {{gen}}.",
    "desc_default": "You can only use Pokémon from the chosen generation.",
    "gen_1": "one",
    "gen_2": "two",
    "gen_3": "three",
    "gen_4": "four",
    "gen_5": "five",
    "gen_6": "six",
    "gen_7": "seven",
    "gen_8": "eight",
    "gen_9": "nine",
  },
  "singleType": {
    "name": "Mono Type",
    "desc": "You can only use Pokémon with the {{type}} type.",
    "desc_default": "You can only use Pokémon of the chosen type."
    //types in pokemon-info
  },
  "freshStart": {
    "name": "Fresh Start",
    "desc": "You can only use the original starters, and only as if you had just started pokerogue.",
    "value.0": "Off",
    "value.1": "On",
  },
} as const;