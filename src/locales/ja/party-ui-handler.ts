import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const partyUiHandler: SimpleTranslationEntries = {
  "SEND_OUT": "いれかえる",
  "SUMMARY": "つよさをみる",
  "CANCEL": "やめる",
  "RELEASE": "にがす",
  "APPLY": "つかう",
  "TEACH": "おしえる",
  "SPLICE": "Splice",
  "UNSPLICE": "Unsplice",
  "ACTIVATE": "Activate",
  "DEACTIVATE": "Deactivate",
  "TRANSFER": "Transfer",
  "ALL": "すべて",
  "PASS_BATON": "Pass Baton",
  "UNPAUSE_EVOLUTION": "Unpause Evolution",
  "REVIVE": "Revive",
  "RENAME": "Rename",

  "choosePokemon": "Choose a Pokémon.",
  "doWhatWithThisPokemon": "Do what with this Pokémon?",
  "noEnergy": "{{pokemonName}} has no energy\nleft to battle!",
  "hasEnergy": "{{pokemonName}} still has energy\nto battle!",
  "cantBeUsed": "{{pokemonName}} can't be used in\nthis challenge!",
  "tooManyItems": "{{pokemonName}} has too many\nof this item!",
  "anyEffect": "It won't have any effect.",
  "unpausedEvolutions": "Evolutions have been unpaused for {{pokemonName}}.",
  "unspliceConfirmation": "Do you really want to unsplice {{fusionName}}\nfrom {{pokemonName}}? {{fusionName}} will be lost.",
  "wasReverted": "{{fusionName}} was reverted to {{pokemonName}}.",
  "releaseConfirmation": "Do you really want to release {{pokemonName}}?",
  "releaseInBattle": "You can't release a Pokémon that's in battle!",
  "selectAMove": "Select a move.",
  "changeQuantity": "Select a held item to transfer.\nUse < and > to change the quantity.",
  "selectAnotherPokemonToSplice": "Select another Pokémon to splice.",
  "cancel": "Cancel",

  // Slot TM text
  "able": "Able",
  "notAble": "Not able",
  "learned": "Learned",

  // Releasing messages
  "goodbye": "Goodbye, {{pokemonName}}!",
  "byebye": "Byebye, {{pokemonName}}!",
  "farewell": "Farewell, {{pokemonName}}!",
  "soLong": "So long, {{pokemonName}}!",
  "thisIsWhereWePart": "This is where we part, {{pokemonName}}!",
  "illMissYou": "I'll miss you, {{pokemonName}}!",
  "illNeverForgetYou": "I'll never forget you, {{pokemonName}}!",
  "untilWeMeetAgain": "Until we meet again, {{pokemonName}}!",
  "sayonara": "Sayonara, {{pokemonName}}!",
  "smellYaLater": "Smell ya later, {{pokemonName}}!",
} as const;