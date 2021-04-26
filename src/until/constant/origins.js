export const origins = [
  {
    name: "Cultist",
    units: [1, 10, 11, 20, 22, 37, 47, 58],
    icon: "cultist.png",
    desc:
      "Once your team loses 50% of their health, Galio is summoned, slamming into the largest cluster of enemies and knocking them up.",
    active: ["3", "6", "9"],
    effect: ["Tyrant Galio", "Demon Lord Galio", "Supreme Overlord Galio"],
    id: 1,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Dusk",
    units: [8, 28, 38, 46, 48],
    icon: "dusk.png",
    desc: "Dusk champions increase all allies Spell Power.",
    active: ["2", "4", "6"],
    effect: [
      "All allies gain 20% Spell Power",
      "And Dusk champions gain an additional 50%",
      "40% Spell Power for all, and an extra 70% for Dusk champions",
    ],
    id: 2,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Enlightened",
    units: [13, 16, 17, 33, 34, 44],
    icon: "enlightened.png",
    desc: "Enlightened champions generate more Mana.",
    active: ["2", "4", "6"],
    effect: [
      "40% Additional Mana",
      "70% Additional Mana",
      "100% Additional Mana",
    ],
    id: 3,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Fortune",
    units: [4, 21, 23, 39, 43],
    icon: "fortune.png",
    desc: "",
    active: ["3", "6"],
    effect: [
      "Winning combat against a player will give bonus orbs. The longer you've gone without an orb, the bigger the payout!",
      "Wins give an extra bonus orb with rare loot!",
    ],
    id: 4,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Ninja",
    units: [3, 25, 41, 57],
    icon: "ninja.png",
    desc:
      "Ninjas gain bonus Attack Damage and Spell Power. This effect is only active when you have exactly 1 or 4 unique Ninjas.",
    active: ["1", "4"],
    effect: [
      "50 Attack Damage and Spell Power",
      "140 Attack Damage and Spell Power",
    ],
    id: 5,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "The Boss",
    units: [40],
    icon: "theboss.png",
    desc: "",
    active: ["1"],
    effect: [
      "When The Boss first drops below 40% health, he removes himself from combat to start doing sit-ups. Each sit-up restores 15% of his maximum health and gives him 40% Attack and Movement Speed. If he reaches full health he returns to combat Pumped Up, converting his basic attack and spell damage to True Damage. If all of his allies die, he will immediately return to combat.",
    ],
    id: 6,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Warlord",
    units: [7, 14, 18, 23, 35, 50, 53],
    icon: "warlord.png",
    desc:
      "Warlords have bonus Health and Spell Power. Each victorious combat they've participated in increases this bonus by 10%, stacking up to 5 times.",
    active: ["3", "6", "9"],
    effect: [
      "200 HP and 20 Spell Power",
      "450 HP and 40 Spell Power",
      "700 HP and 70 Spell Power",
    ],
    id: 7,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Divine",
    units: [16, 19, 27, 31, 51, 52],
    icon: "divine.png",
    desc:
      "Upon attacking 6 times or dropping below 50% health, Divine units remove all crowd control and ascend, taking 50% reduced damage and dealing 50% bonus true damage for the duration of the ascension.",
    active: ["2", "4", "6", "8"],
    effect: ["3 seconds", "6 seconds", "9 seconds", "15 seconds"],
    id: 8,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Elderwood",
    units: [6, 12, 15, 30, 32, 36, 49],
    icon: "elderwood.png",
    desc:
      "Every two seconds all Elderwood champions grow, gaining bonus stats. This effect stacks up to five times.",
    active: ["3", "6", "9"],
    effect: [
      "15 Armor and Magic Resist, 5 Attack Damage and Spell Power",
      "25 Armor and Magic Resist, 10 Attack Damage and Spell Power",
      "40 Armor and Magic Resist, 20 Attack Damage and Spell Power",
    ],
    id: 9,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Exile",
    units: [54, 55],
    icon: "exile.png",
    desc:
      "If an Exile has no adjacent allies at the start of combat, they gain:",
    active: ["1", "2"],
    effect: [
      "Shield equal to 50% of their maximum health",
      "And 80% Lifesteal",
    ],
    id: 10,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Moonlight",
    units: [5, 9, 29, 42],
    icon: "moonlight.png",
    desc:
      "At the start of combat, the lowest star-level Moonlight champions stars up until combat ends.\n(In the case of a tie, the champion with the most items is chosen.)",
    active: ["3", "5"],
    effect: ["Stars up 1 champion", "Stars up 2 champions"],
    id: 11,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Spirit",
    units: [2, 26, 45, 56],
    icon: "spirit.png",
    desc:
      "The first time a Spirit casts their spell, all allies gain Attack Speed based on the spell's mana cost.",
    active: ["2", "4"],
    effect: ["35% of Mana Cost", "70% of Mana Cost"],
    id: 12,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
  {
    name: "Tormented",
    units: [24],
    icon: "tormented.png",
    desc: "",
    active: ["1"],
    effect: [
      "Tormented can be transformed after participating in 3 combats, enhancing their abilities.",
    ],
    id: 13,
    name_vi: "Chưa dịch",
    desc_vi: "Chưa dịch",
    effect_vi: "Chưa dịch",
    search_text: "",
  },
];