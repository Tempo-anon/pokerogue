import { ModifierTypeTranslationEntries } from "#app/interfaces/locales";

export const modifierType: ModifierTypeTranslationEntries = {
  ModifierType: {
    "AddPokeballModifierType": {
      name: "{{modifierCount}}x {{pokeballName}}",
      description: "{{pokeballName}} x{{modifierCount}}こ てにいれる (インベントリ: {{pokeballAmount}}) \nほそくりつ: {{catchRate}}",
    },
    "AddVoucherModifierType": {
      name: "{{modifierCount}}x {{voucherTypeName}}",
      description: "{{voucherTypeName}} x{{modifierCount}}こ てにいれる",
    },
    "PokemonHeldItemModifierType": {
      extra: {
        "inoperable": "{{pokemonName}} はこのアイテムを\nもつことができません！",
        "tooMany": "{{pokemonName}} はこのアイテムを\nもちすぎています！",
      }
    },
    "PokemonHpRestoreModifierType": {
      description: "ポケモンの HPを {{restorePoints}} または {{restorePercent}}%のどちらか たかいほうを かいふくする",
      extra: {
        "fully": "ポケモンのHPをすべてかいふくする",
        "fullyWithStatus": "ポケモンの HPと じょうたいいじょうを かいふくする",
      }
    },
    "PokemonReviveModifierType": {
      description: "ひんしになってしまったポケモンの HP {{restorePercent}}%を かいふくする",
    },
    "PokemonStatusHealModifierType": {
      description: "すべてのじょうたいいじょうを なおす",
    },
    "PokemonPpRestoreModifierType": {
      description: "ポケモンが おぼえている わざの PPを {{restorePoints}}ずつ かいふくする",
      extra: {
        "fully": "ポケモンが おぼえている わざの PPを すべて かいふくする",
      }
    },
    "PokemonAllMovePpRestoreModifierType": {
      description: "ポケモンが おぼえている 4つの わざの PPを {{restorePoints}}ずつ かいふくする",
      extra: {
        "fully": "ポケモンが おぼえている 4つの わざの PPを すべて かいふくする",
      }
    },
    "PokemonPpUpModifierType": {
      description: "ポケモンのわざのさいだいPPを さいだいPP 5ごとに {{upPoints}} ポイントずつ ふやします（さいだい3）",
    },
    "PokemonNatureChangeModifierType": {
      name: "{{natureName}} Mint",
      description: "ポケモンのせいかくを {{natureName}}にかえて スターターのせいかくをえいきゅうにかいじょする",
    },
    "DoubleBattleChanceBoosterModifierType": {
      description: "バトル{{battleCount}}かいのあいだ ダブルバトルになるかくりつを2ばいにする",
    },
    "TempBattleStatBoosterModifierType": {
      description: "すべてのパーティメンバーの {{tempBattleStatName}}を5かいのバトルのあいだ 1だんかいあげる",
    },
    "AttackTypeBoosterModifierType": {
      description: "ポケモンの {{moveType}}タイプのわざのいりょくを20パーセントあげる",
    },
    "PokemonLevelIncrementModifierType": {
      description: "ポケモンのレベルを1あげる",
    },
    "AllPokemonLevelIncrementModifierType": {
      description: "すべてのパーティメンバーのレベルを1あげる",
    },
    "PokemonBaseStatBoosterModifierType": {
      description: "ポケモンの{{statName}}のきほんステータスを10パーセントあげる。こたいちがたかいほどスタックのげんかいもたかくなる。",
    },
    "AllPokemonFullHpRestoreModifierType": {
      description: "すべてのポケモンのHPを100パーセントかいふくする",
    },
    "AllPokemonFullReviveModifierType": {
      description: "ひんしになったすべてのポケモンをふっかつさせ HPをぜんかいふくする",
    },
    "MoneyRewardModifierType": {
      description: "{{moneyMultiplier}}ぶんのきんがくをあたえる (₽{{moneyAmount}})",
      extra: {
        "small": "すくない",
        "moderate": "ふつう",
        "large": "おおい",
      },
    },
    "ExpBoosterModifierType": {
      description: "もらえるけいけんちを {{boostPercent}}パーセントふやす",
    },
    "PokemonExpBoosterModifierType": {
      description: "もっているポケモンのけいけんちを {{boostPercent}}パーセントふやす",
    },
    "PokemonFriendshipBoosterModifierType": {
      description: "しょうりごとに 50%パーセント なかよく なりやすくなる",
    },
    "PokemonMoveAccuracyBoosterModifierType": {
      description: "わざのめいちゅうりつを{{accuracyAmount}}ふやす (さいだい100)",
    },
    "PokemonMultiHitModifierType": {
      description: "こうげきがもういちどあたる。そのたびにいりょくがそれぞれ60/75/82.5%へる",
    },
    "TmModifierType": {
      name: "TM{{moveId}} - {{moveName}}",
      description: "ポケモンに {{moveName}} をおしえる",
    },
    "TmModifierTypeWithInfo": {
      name: "TM{{moveId}} - {{moveName}}",
      description: "ポケモンに {{moveName}} をおしえる\n(Hold C or Shift for more info)",
    },
    "EvolutionItemModifierType": {
      description: "とくていのポケモンをしんかさせる",
    },
    "FormChangeItemModifierType": {
      description: "とくていのポケモンをフォームチェンジさせる",
    },
    "FusePokemonModifierType": {
      description: "2匹のポケモンをけつごうする (とくせいをいどうし、きほんステータスとタイプをわけ、わざプールをきょうゆうする)",
    },
    "TerastallizeModifierType": {
      name: "{{teraType}} Tera Shard",
      description: "ポケモンを{{teraType}}タイプにテラスタル（10かいのバトルまで）",
    },
    "ContactHeldItemTransferChanceModifierType": {
      description: "こうげきするとき あいてがもっているアイテムを {{chancePercent}}パーセントのかくりつでぬすむ",
    },
    "TurnHeldItemTransferModifierType": {
      description: "まいターン あいてからひとつのもちものをてにいれる",
    },
    "EnemyAttackStatusEffectChanceModifierType": {
      description: "こうげきわざに {{chancePercent}}パーセントのかくりつで {{statusEffect}}をあたえる",
    },
    "EnemyEndureChanceModifierType": {
      description: "こうげきをこらえるかくりつを{{chancePercent}}パーセントふやす",
    },

    "RARE_CANDY": { name: "ふしぎなアメ" },
    "RARER_CANDY": { name: "もっとふしぎなアメ" },

    "MEGA_BRACELET": { name: "メガバングル", description: "メガストーンがつかえるようになる" },
    "DYNAMAX_BAND": { name: "ダイマックスバンド", description: "ダイスープがつかえるようになる" },
    "TERA_ORB": { name: "テラスタルオーブ", description: "テラピースがつかえるようになる" },

    "MAP": { name: "ちず", description: "わかれみちでいきさきをえらべるようになる" },

    "POTION": { name: "キズぐすり" },
    "SUPER_POTION": { name: "いいキズぐすり" },
    "HYPER_POTION": { name: "すごいキズぐすり" },
    "MAX_POTION": { name: "まんたんのくすり" },
    "FULL_RESTORE": { name: "かいふくのくすり" },

    "REVIVE": { name: "げんきのかけら" },
    "MAX_REVIVE": { name: "げんきのかたまり" },

    "FULL_HEAL": { name: "なんでもなおし" },

    "SACRED_ASH": { name: "せいなるはい" },

    "REVIVER_SEED": { name: "ふっかつのタネ", description: "ひんしになったときもっているポケモンをHPはんぶんでふっかつさせる" },

    "ETHER": { name: "ピーピーエイド" },
    "MAX_ETHER": { name: "ピーピーリカバー" },

    "ELIXIR": { name: "ピーピーエイダー" },
    "MAX_ELIXIR": { name: "ピーピーマックス" },

    "PP_UP": { name: "ポイントアップ" },
    "PP_MAX": { name: "ポイントマックス" },

    "LURE": { name: "ダブルバトルコロン" },
    "SUPER_LURE": { name: "シルバーコロン" },
    "MAX_LURE": { name: "ゴールドコロン" },

    "MEMORY_MUSHROOM": { name: "きおくキノコ", description: "ポケモンのわすれたわざをおぼえさせる" },

    "EXP_SHARE": { name: "がくしゅうそうち", description: "バトルにさんかしていないポケモンが けいけんちの20パーセントをもらう" },
    "EXP_BALANCE": { name: "バランスそうち", description: "レベルがひくいパーティメンバーがもらうけいけんちがふえる" },

    "OVAL_CHARM": { name: "まるいおまもり", description: "バトルにふくすうのポケモンがさんかするとけいけんちが10パーセントふえる" },

    "EXP_CHARM": { name: "けいけんちおまもり" },
    "SUPER_EXP_CHARM": { name: "いいけいけんちおまもり" },
    "GOLDEN_EXP_CHARM": { name: "ゴールドけいけんちおまもり" },

    "LUCKY_EGG": { name: "しあわせタマゴ" },
    "GOLDEN_EGG": { name: "おうごんタマゴ" },

    "SOOTHE_BELL": { name: "やすらぎのすず" },

    "SOUL_DEW": { name: "こころのしずく", description: "ポケモンのせいかくがステータスにあたえるえいきょうを10%ふやす（合算）" },

    "NUGGET": { name: "きんのたま" },
    "BIG_NUGGET": { name: "でかいきんのたま" },
    "RELIC_GOLD": { name: "こだいのきんか" },

    "AMULET_COIN": { name: "おまもりこばん", description: "もらえる おかねが 20パーセント ふえる" },
    "GOLDEN_PUNCH": { name: "ゴールドパンチ", description: "あたえたちょくせつダメージの50パーセントをおかねとしてもらえる" },
    "COIN_CASE": { name: "コインケース", description: "10かいのバトルごとにもちきんの10パーセントをりしとしてうけとる" },

    "LOCK_CAPSULE": { name: "ロックカプセル", description: "リロールするときにアイテムのレアリティをロックできる" },

    "GRIP_CLAW": { name: "ねばりのかぎづめ" },
    "WIDE_LENS": { name: "こうかくレンズ" },

    "MULTI_LENS": { name: "マルチレンズ" },

    "HEALING_CHARM": { name: "ヒーリングチャーム", description: "HPをかいふくするわざとアイテムのこうかを10パーセントあげる (ふっかつはのぞく)" },
    "CANDY_JAR": { name: "アメボトル", description: "ふしぎなアメのアイテムでふえるレベルが1ふえる" },

    "BERRY_POUCH": { name: "きのみぶくろ", description: "つかったきのみがつかわれないかくりつを30パーセントふやす" },

    "FOCUS_BAND": { name: "きあいのハチマキ", description: "ひんしになるダメージをうけてもHP1でたえるかくりつを10パーセントふやす" },

    "QUICK_CLAW": { name: "せんせいのツメ", description: "すばやさにかかわらず さきにこうどうするかくりつを10パーセントふやす (ゆうせんどのあと)" },

    "KINGS_ROCK": { name: "おうじゃのしるし", description: "こうげきわざがあいてをひるませるかくりつを10パーセントふやす" },

    "LEFTOVERS": { name: "たべのこし", description: "ポケモンのさいだいHPの1/16をまいターンかいふくする" },
    "SHELL_BELL": { name: "かいがらのすず", description: "ポケモンがあたえたダメージの1/8をかいふくする" },

    "TOXIC_ORB": { name: "どくどくだま", description: "ターンの終わりに すでに じょうたいじょうしょうが なければ もうどくの じょうたいに なる" },
    "FLAME_ORB": { name: "かえんだま", description: "ターンの終わりに すでに じょうたいじょうしょうが なければ やけどの じょうたいに なる" },

    "BATON": { name: "バトン", description: "ポケモンをこうたいするときにこうかをひきつぎ わなをかいひすることもできる" },

    "SHINY_CHARM": { name: "ひかるおまもり", description: "やせいのポケモンがいろちがいポケモンであるかくりつをおおきくふやす" },
    "ABILITY_CHARM": { name: "とくせいおまもり", description: "やせいのポケモンがかくれとくせいをもつかくりつをおおきくふやす" },

    "IV_SCANNER": { name: "こたいち たんちき", description: "やせいのポケモンのこたいちをスキャンできる。スタックごとに2つのこたいちがあきらかになる。もっともたかいこたいちがさいしょにひょうじされる" },

    "DNA_SPLICERS": { name: "いでんしのくさび" },

    "MINI_BLACK_HOLE": { name: "ミニブラックホール" },

    "GOLDEN_POKEBALL": { name: "ゴールドモンスターボール", description: "バトルごとに1つのアイテムオプションをふやす" },

    "ENEMY_DAMAGE_BOOSTER": { name: "ダメージトークン", description: "ダメージを5%ふやす" },
    "ENEMY_DAMAGE_REDUCTION": { name: "プロテクショントークン", description: "うけるダメージを2.5%へらす" },
    "ENEMY_HEAL": { name: "かいふくトークン", description: "まいターンさいだいHPの2%をかいふくする" },
    "ENEMY_ATTACK_POISON_CHANCE": { name: "どくトークン" },
    "ENEMY_ATTACK_PARALYZE_CHANCE": { name: "まひトークン" },
    "ENEMY_ATTACK_BURN_CHANCE": { name: "やけどトークン" },
    "ENEMY_STATUS_EFFECT_HEAL_CHANCE": { name: "なおしトークン", description: "まいターン2.5%のかくりつでじょうたいじょうしょうをかいふくする" },
    "ENEMY_ENDURE_CHANCE": { name: "こらえるトークン" },
    "ENEMY_FUSED_CHANCE": { name: "フュージョントークン", description: "やせいのポケモンがフュージョンするかくりつを1%ふやす" },
  },
  TempBattleStatBoosterItem: {
    "x_attack": "プラスパワー",
    "x_defense": "ディフェンダー",
    "x_sp_atk": "スペシャルアップ",
    "x_sp_def": "スペシャルガード",
    "x_speed": "スピーダー",
    "x_accuracy": "ヨクアタール",
    "dire_hit": "クリティカット",
  },

  TempBattleStatBoosterStatName: {
    "ATK": "こうげき",
    "DEF": "ぼうぎょ",
    "SPATK": "とくこう",
    "SPDEF": "とくぼう",
    "SPD": "すばやさ",
    "ACC": "めいちゅう",
    "CRIT": "きゅうしょりつ",
    "EVA": "かいひ",
    "DEFAULT": "???",
  },

  AttackTypeBoosterItem: {
    "silk_scarf": "シルクのスカーフ",
    "black_belt": "くろおび",
    "sharp_beak": "するどいくちばし",
    "poison_barb": "どくバリ",
    "soft_sand": "やわらかいすな",
    "hard_stone": "かたいいし",
    "silver_powder": "ぎんのこな",
    "spell_tag": "のろいのおふだ",
    "metal_coat": "メタルコート",
    "charcoal": "もくたん",
    "mystic_water": "しんぴのしずく",
    "miracle_seed": "きせきのタネ",
    "magnet": "じしゃく",
    "twisted_spoon": "まがったスプーン",
    "never_melt_ice": "とけないこおり",
    "dragon_fang": "りゅうのキバ",
    "black_glasses": "くろいメガネ",
    "fairy_feather": "ようせいのハネ",
  },
  BaseStatBoosterItem: {
    "hp_up": "マックスアップ",
    "protein": "タウリン",
    "iron": "ブロムヘキシン",
    "calcium": "リゾチウム",
    "zinc": "キトサン",
    "carbos": "インドメタシン",
  },
  EvolutionItem: {
    "NONE": "None",

    "LINKING_CORD": "つながりのヒモ",
    "SUN_STONE": "たいようのいし",
    "MOON_STONE": "つきのいし",
    "LEAF_STONE": "リーフのいし",
    "FIRE_STONE": "ほのおのいし",
    "WATER_STONE": "みずのいし",
    "THUNDER_STONE": "かみなりのいし",
    "ICE_STONE": "こおりのいし",
    "DUSK_STONE": "やみのいし",
    "DAWN_STONE": "めざめいし",
    "SHINY_STONE": "ひかりのいし",
    "CRACKED_POT": "われたポット",
    "SWEET_APPLE": "あまーいりんご",
    "TART_APPLE": "すっぱいりんご",
    "STRAWBERRY_SWEET": "いちごアメざいく",
    "UNREMARKABLE_TEACUP": "ボンサクのちゃわん",

    "CHIPPED_POT": "かけたポット",
    "BLACK_AUGURITE": "くろのきせき",
    "GALARICA_CUFF": "ガラナツブレス",
    "GALARICA_WREATH": "ガラナツリース",
    "PEAT_BLOCK": "ピートブロック",
    "AUSPICIOUS_ARMOR": "イワイノヨロイ",
    "MALICIOUS_ARMOR": "ノロイノヨロイ",
    "MASTERPIECE_TEACUP": "ケッサクのちゃわん",
    "METAL_ALLOY": "ふくごうきんぞく",
    "SCROLL_OF_DARKNESS": "あくのかけじく",
    "SCROLL_OF_WATERS": "みずのかけじく",
    "SYRUPY_APPLE": "みついりりんご",
  },
  FormChangeItem: {
    "NONE": "None",

    "ABOMASITE": "ユキノオナイト",
    "ABSOLITE": "アブソルナイト",
    "AERODACTYLITE": "プテラナイト",
    "AGGRONITE": "ボスゴドラナイト",
    "ALAKAZITE": "フーディナイト",
    "ALTARIANITE": "チルタリスナイト",
    "AMPHAROSITE": "デンリュウナイト",
    "AUDINITE": "タブンネナイト",
    "BANETTITE": "ジュペッタナイト",
    "BEEDRILLITE": "スピアナイト",
    "BLASTOISINITE": "カメックスナイト",
    "BLAZIKENITE": "バシャーモナイト",
    "CAMERUPTITE": "バクーダナイト",
    "CHARIZARDITE_X": "リザードナイトX",
    "CHARIZARDITE_Y": "リザードナイトY",
    "DIANCITE": "ディアンシナイト",
    "GALLADITE": "エルレイドナイト",
    "GARCHOMPITE": "ガブリアスナイト",
    "GARDEVOIRITE": "サーナイトナイト",
    "GENGARITE": "ゲンガナイト",
    "GLALITITE": "オニゴーリナイト",
    "GYARADOSITE": "ギャラドスナイト",
    "HERACRONITE": "ヘラクロスナイト",
    "HOUNDOOMINITE": "ヘルガナイト",
    "KANGASKHANITE": "ガルーラナイト",
    "LATIASITE": "ラティアスナイト",
    "LATIOSITE": "ラティオスナイト",
    "LOPUNNITE": "ミミロップナイト",
    "LUCARIONITE": "ルカリオナイト",
    "MANECTITE": "ライボルトナイト",
    "MAWILITE": "クチートナイト",
    "MEDICHAMITE": "チャーレムナイト",
    "METAGROSSITE": "メタグロスナイト",
    "MEWTWONITE_X": "ミュウツナイトX",
    "MEWTWONITE_Y": "ミュウツナイトY",
    "PIDGEOTITE": "ピジョットナイト",
    "PINSIRITE": "カイロスナイト",
    "RAYQUAZITE": "レックウザナイト",
    "SABLENITE": "ヤミラミナイト",
    "SALAMENCITE": "ボーマンダナイト",
    "SCEPTILITE": "ジュカインナイト",
    "SCIZORITE": "ハッサムナイト",
    "SHARPEDONITE": "サメハダナイト",
    "SLOWBRONITE": "ヤドランナイト",
    "STEELIXITE": "ハガネールナイト",
    "SWAMPERTITE": "ラグラージナイト",
    "TYRANITARITE": "バンギラスナイト",
    "VENUSAURITE": "フシギバナイト",

    "BLUE_ORB": "あいいろのたま",
    "RED_ORB": "べにいろのたま",
    "SHARP_METEORITE": "シャープなうんせき",
    "HARD_METEORITE": "かたいうんせき",
    "SMOOTH_METEORITE": "やわらかいうんせき",
    "ADAMANT_CRYSTAL": "だいこんごうだま",
    "LUSTROUS_GLOBE": "だいしらたま",
    "GRISEOUS_CORE": "だいはっきんだま",
    "REVEAL_GLASS": "うつしかがみ",
    "GRACIDEA": "グラシデアのはな",
    "MAX_MUSHROOMS": "ダイキノコ",
    "DARK_STONE": "ダークストーン",
    "LIGHT_STONE": "ライトストーン",
    "PRISON_BOTTLE": "いましめのツボ",
    "N_LUNARIZER": "ネクロプラスルナ",
    "N_SOLARIZER": "ネクロプラスソル",
    "RUSTED_SWORD": "くちたけん",
    "RUSTED_SHIELD": "くちたたて",
    "ICY_REINS_OF_UNITY": "つめたいキズナのタヅナ",
    "SHADOW_REINS_OF_UNITY": "くろいキズナのタヅナ",
    "WELLSPRING_MASK": "いどのめん",
    "HEARTHFLAME_MASK": "かまどのめん",
    "CORNERSTONE_MASK": "いしずえのめん",
    "SHOCK_DRIVE": "イナズマカセット",
    "BURN_DRIVE": "ブレイズカセット",
    "CHILL_DRIVE": "フリーズカセット",
    "DOUSE_DRIVE": "アクアカセット",
  },
} as const;
