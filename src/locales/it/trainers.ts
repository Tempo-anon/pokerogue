import {SimpleTranslationEntries} from "#app/interfaces/locales";

// Titles of special trainers like gym leaders, elite four, and the champion
export const titles: SimpleTranslationEntries = {
  "elite_four": "Superquattro",
  "elite_four_female": "Superquattro",
  "gym_leader": "Capopalestra",
  "gym_leader_female": "Capopalestra",
  "gym_leader_double": "Duo Capopalestra",
  "champion": "Campione",
  "champion_female": "Campionessa",
  "champion_double": "Duo Campioni",
  "rival": "Rivale",
  "professor": "Professore",
  "frontier_brain": "Asso lotta",
  "rocket_boss": "Team Rocket Boss",
  "magma_boss": "Team Magma Boss",
  "aqua_boss": "Team Aqua Boss",
  "galactic_boss": "Team Galactic Boss",
  "plasma_boss": "Team Plasma Boss",
  "flare_boss": "Team Flare Boss",

  "rocket_admin": "Team Rocket Admin",
  "magma_admin": "Team Magma Admin",
  "aqua_admin": "Team Aqua Admin",
  "galactic_commander": "Team Galactic Commander",
  "plasma_sage": "Team Plasma Sage",
  "plasma_admin": "Team Plasma Admin",
  "flare_admin": "Team Flare Admin",
  // Maybe if we add the evil teams we can add "Team Rocket" and "Team Aqua" etc. here as well as "Team Rocket Boss" and "Team Aqua Admin" etc.
} as const;

// Titles of trainers like "Youngster" or "Lass"
export const trainerClasses: SimpleTranslationEntries = {
  "ace_trainer": "Fantallenatore",
  "ace_trainer_female": "Fantallenatrice",
  "ace_duo": "Fantallenatori",
  "artist": "Artista",
  "artist_female": "Artista",
  "backers": "Fan",
  "backpacker": "Giramondo",
  "backpacker_female": "Giramondo",
  "backpackers": "Giramondo",
  "baker": "Panettiera",
  "battle_girl": "Combat Girl",
  "beauty": "Bellezza",
  "beginners": "Novellini",
  "biker": "Centauro",
  "black_belt": "Cinturanera",
  "breeder": "Allevapokémon",
  "breeder_female": "Allevapokémon",
  "breeders": "Allevapokémon",
  "clerk": "Affarista",
  "clerk_female": "Donna in carriera",
  "colleagues": "Soci in affari",
  "crush_kin": "Duo Lotta",
  "cyclist": "Ciclista",
  "cyclist_female": "Ciclista",
  "cyclists": "Ciclisti",
  "dancer": "Ballerino",
  "dancer_female": "Ballerina",
  "depot_agent": "Ferroviario",
  "doctor": "Medico",
  "doctor_female": "Medica",
  "firebreather": "Mangiafuoco",
  "fisherman": "Pescatore",
  "fisherman_female": "Pescatrice",
  "gentleman": "Gentiluomo",
  "guitarist": "Chitarrista",
  "guitarist_female": "Chitarrista",
  "harlequin": "Buffone",
  "hiker": "Montanaro",
  "hooligans": "Teppisti",
  "hoopster": "Cestista",
  "infielder": "Battitore",
  "janitor": "Netturbino",
  "lady": "Lady",
  "lass": "Pupa",
  "linebacker": "Quarterback",
  "maid": "Domestica",
  "madame": "Madame",
  "medical_team": "Équipe medica",
  "musician": "Musicista",
  "hex_maniac": "Streghetta",
  "nurse": "Infermiera",
  "nursery_aide": "Maestrina",
  "officer": "Guardia",
  "parasol_lady": "Ombrellina",
  "pilot": "Pilota",
  "pokéfan": "PokéFan",
  "pokéfan_female": "PokéFan",
  "pokéfan_family": "Famiglia PokéFan",
  "preschooler": "Bimbo",
  "preschooler_female": "Bimba",
  "preschoolers": "Bimbi",
  "psychic": "Sensitivo",
  "psychic_female": "Sensitiva",
  "psychics": "Sensitivi",
  "pokémon_ranger": "Pokémon Ranger",
  "pokémon_ranger_female": "Pokémon Ranger",
  "pokémon_rangers": "Duo Ranger",
  "ranger": "Ranger",
  "restaurant_staff": "Personale del ristorante",
  "rich": "Ricco",
  "rich_female": "Ricca",
  "rich_boy": "Elegantone",
  "rich_couple": "Ricchi",
  "rich_kid": "Bimbo ricco",
  "rich_kid_female": "Bimba ricca",
  "rich_kids": "Bimbi ricchi",
  "roughneck": "Zuccapelata",
  "sailor": "Marinaio",
  "scientist": "Scienziato",
  "scientist_female": "Scienziata",
  "scientists": "Scienziati",
  "smasher": "Tennista",
  "snow_worker": "Lavoratore",
  "snow_worker_female": "Lavoratrice",
  "striker": "Calciatore",
  "school_kid": "Alunno",
  "school_kid_female": "Alunna",
  "school_kids": "Alunni",
  "swimmer": "Nuotatore",
  "swimmer_female": "Nuotatrice",
  "swimmers": "Nuotatori",
  "twins": "Gemelli",
  "veteran": "Veterano",
  "veteran_female": "Veterana",
  "veteran_duo": "Veterani",
  "waiter": "Cameriere",
  "waitress": "Cameriera",
  "worker": "Operaio",
  "worker_female": "Lavoratrice",
  "workers": "Lavoratori",
  "youngster": "Bullo",
  "rocket_grunt": "Recluta Team Rocket",
  "rocket_grunt_female": "Recluta Team Rocket",
  "rocket_grunts": "Reclute Team Rocket",
  "rocket_admin": "Rocket Admin",
  "rocket_admin_female": "Rocket Admin",
  "magma_grunt": "Recluta Team Magma",
  "magma_grunt_female": "Recluta Team Magma",
  "magma_grunts": "Reclute Team Magma",
  "magma_admin": "Magma Admin",
  "magma_admin_female": "Magma Admin",
  "aqua_grunt": "Recluta Team Idro",
  "aqua_grunt_female": "Recluta Team Idro",
  "aqua_grunts": "Recluta Team Idro",
  "aqua_admin": "Aqua Admin",
  "aqua_admin_female": "Aqua Admin",
  "galactic_grunt": "Recluta Team Galassia",
  "galactic_grunt_female": "Recluta Team Galassia",
  "galactic_grunts": "Reclute Team Galassia",
  "galactic_admin": "Galactic Admin",
  "galactic_admin_female": "Galactic Admin",
  "plasma_grunt": "Seguace Plasma",
  "plasma_grunt_female": "Seguace Plasma",
  "plasma_grunts": "Seguaci Plasma",
  "flare_grunt": "Recluta Team Flare",
  "flare_grunt_female": "Recluta Team Flare",
  "flare_grunts": "Reclute Team Flare",
  "flare_admin": "Flare Admin",
  "flare_admin_female": "Flare Admin",
} as const;

// Names of special trainers like gym leaders, elite four, and the champion
export const trainerNames: SimpleTranslationEntries = {
  "brock": "Brock",
  "misty": "Misty",
  "lt_surge": "Lt. Surge",
  "erika": "Erika",
  "janine": "Nina",
  "sabrina": "Sabrina",
  "blaine": "Blaine",
  "giovanni": "Giovanni",
  "falkner": "Valerio",
  "bugsy": "Raffaello",
  "whitney": "Chiara",
  "morty": "Angelo",
  "chuck": "Furio",
  "jasmine": "Jasmine",
  "pryce": "Alfredo",
  "clair": "Sandra",
  "roxanne": "Petra",
  "brawly": "Rudi",
  "wattson": "Walter",
  "flannery": "Fiammetta",
  "norman": "Norman",
  "winona": "Alice",
  "tate": "Tell",
  "liza": "Pat",
  "juan": "Rodolfo",
  "roark": "Pedro",
  "gardenia": "Gardenia",
  "maylene": "Marzia",
  "crasher_wake": "Omar",
  "fantina": "Fannie",
  "byron": "Ferruccio",
  "candice": "Bianca",
  "volkner": "Corrado",
  "cilan": "Spighetto",
  "chili": "Chicco",
  "cress": "Maisello",
  "cheren": "Komor",
  "lenora": "Aloé",
  "roxie": "Velia",
  "burgh": "Artemisio",
  "elesa": "Camelia",
  "clay": "Rafan",
  "skyla": "Anemone",
  "brycen": "Silvestro",
  "drayden": "Aristide",
  "marlon": "Ciprian",
  "viola": "Violetta",
  "grant": "Lino",
  "korrina": "Ornella",
  "ramos": "Amur",
  "clemont": "Lem",
  "valerie": "Valérie",
  "olympia": "Astra",
  "wulfric": "Edel",
  "milo": "Yarrow",
  "nessa": "Azzurra",
  "kabu": "Kabu",
  "bea": "Fabia",
  "allister": "Onion",
  "opal": "Poppy",
  "bede": "Beet",
  "gordie": "Milo",
  "melony": "Melania",
  "piers": "Ginepro",
  "marnie": "Mary",
  "raihan": "Raihan",
  "katy": "Aceria",
  "brassius": "Brassius",
  "iono": "Kissara",
  "kofu": "Algaro",
  "larry": "Ubaldo",
  "ryme": "Ryme",
  "tulip": "Tulipa",
  "grusha": "Grusha",
  "lorelei": "Lorelei",
  "bruno": "Bruno",
  "agatha": "Agatha",
  "lance": "Lance",
  "will": "Pino",
  "koga": "Koga",
  "karen": "Karen",
  "sidney": "Fosco",
  "phoebe": "Ester",
  "glacia": "Frida",
  "drake": "Drake",
  "aaron": "Aaron",
  "bertha": "Terrie",
  "flint": "Vulcano",
  "lucian": "Luciano",
  "shauntal": "Antemia",
  "marshal": "Marzio",
  "grimsley": "Mirton",
  "caitlin": "Catlina",
  "malva": "Malva",
  "siebold": "Narciso",
  "wikstrom": "Timeos",
  "drasna": "Lila",
  "hala": "Hala",
  "molayne": "Tapso",
  "olivia": "Olive",
  "acerola": "Mapli",
  "kahili": "Kahili",
  "rika": "Rika",
  "poppy": "Poppy",
  "hassel": "Oranzio",
  "crispin": "Piros",
  "amarys": "Erin",
  "lacey": "Rupi",
  "drayton": "Aris",
  "blue": "Blu",
  "red": "Rosso",
  "steven": "Rocco",
  "wallace": "Adriano",
  "cynthia": "Camilla",
  "alder": "Nardo",
  "iris": "Iris",
  "diantha": "Diantha",
  "hau": "Hau",
  "geeta": "Alisma",
  "nemona": "Nemi",
  "kieran": "Riben",
  "leon": "Dandel",
  "rival": "Finn",
  "rival_female": "Ivy",

  // Evil Team Admins
  "archer": "Archer",
  "ariana": "Ariana",
  "proton": "Proton",
  "petrel": "Petrel",
  "tabitha": "Tabitha",
  "courtney": "Courtney",
  "shelly": "Shelly",
  "matt": "Matt",
  "mars": "Mars",
  "jupiter": "Jupiter",
  "saturn": "Saturn",
  "zinzolin": "Zinzolin",
  "colress": "Colress",
  "xerosic": "Xerosic",
  "bryony": "Bryony",

  "maxie": "Maxie",
  "archie": "Archie",
  "cyrus": "Cyrus",
  "ghetsis": "Ghetsis",
  "lysandre": "Lysandre",

  // Double Names
  "blue_red_double": "Blu & Rosso",
  "red_blue_double": "Rosso & Blu",
  "tate_liza_double": "Tell & Pat",
  "liza_tate_double": "Pat & Tell",
  "steven_wallace_double": "Rocco & Adriano",
  "wallace_steven_double": "Adriano & Rocco",
  "alder_iris_double": "Nardo & Iris",
  "iris_alder_double": "Iris & Nardo",
  "marnie_piers_double": "Mary & Ginepro",
  "piers_marnie_double": "Ginepro & Mary",
} as const;
