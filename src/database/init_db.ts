import { createConnection } from 'typeorm';
import { Pokemon, Type, Card, CardType, Set, CardRarity } from '../models';

export const init_db = async() => {
  const connection = await createConnection();
  await connection.dropDatabase();
  await connection.synchronize();

  // Types
  const bug = new Type();
  bug.name = 'Bug';
  await bug.save();

  const dark = new Type();
  dark.name = 'Dark';
  await dark.save();

  const dragon = new Type();
  dragon.name = 'Dragon';
  await dragon.save();

  const electric = new Type();
  electric.name = 'Electric';
  await electric.save();

  const fairy = new Type();
  fairy.name = 'Fairy';
  await fairy.save()

  const figthing = new Type();
  figthing.name = 'Fighting';
  await figthing.save()

  const fire = new Type();
  fire.name = 'Fire';
  await fire.save()

  const flying = new Type();
  flying.name = 'Flying';
  await flying.save()

  const ghost = new Type();
  ghost.name = 'Ghost';
  await ghost.save()

  const grass = new Type();
  grass.name = 'Grass';
  await grass.save()

  const ground = new Type();
  ground.name = 'Ground';
  await ground.save()

  const ice = new Type();
  ice.name = 'Ice';
  await ice.save()

  const normal = new Type();
  normal.name = 'Normal';
  await normal.save()

  const poison = new Type();
  poison.name = 'Poison';
  await poison.save()

  const psychic = new Type();
  psychic.name = 'Psychic';
  await psychic.save()

  const rock = new Type();
  rock.name = 'Rock';
  await rock.save()

  const steel = new Type();
  steel.name = 'Steel';
  await steel.save()

  const water = new Type();
  water.name = 'Water';
  await water.save()

  // CardRarity
  const common = new CardRarity();
  common.name = 'Common';
  await common.save();

  const uncommon = new CardRarity();
  uncommon.name = 'Uncommon';
  await uncommon.save();

  const rare = new CardRarity();
  rare.name = 'Rare';
  await rare.save();

  const holo = new CardRarity();
  holo.name = 'Holo';
  await holo.save();

  const ex = new CardRarity();
  ex.name = 'EX';
  await ex.save();

  const gx = new CardRarity();
  gx.name = 'GX';
  await gx.save();

  const fullArt = new CardRarity();
  fullArt.name = 'Fullart';
  await fullArt.save();

  const breakCard = new CardRarity();
  breakCard.name = 'break';
  await breakCard.save();

  const shiny = new CardRarity();
  shiny.name = 'Shiny';
  await shiny.save();

  const rainbowRare = new CardRarity();
  rainbowRare.name = 'Rainbow Rare';
  await rainbowRare.save();

  const levelX = new CardRarity();
  levelX.name = 'Level X';
  await levelX.save();

  const prime = new CardRarity();
  prime.name = 'Prime';
  await prime.save();

  const promo = new CardRarity();
  promo.name = 'Promo';
  await promo.save();

  const secretRare = new CardRarity();
  secretRare.name = 'Secret Rare';
  await secretRare.save();

  const ultraRare = new CardRarity();
  ultraRare.name = 'Ultra Rare';
  await ultraRare.save();

  const prism = new CardRarity();
  prism.name = 'Prism';
  await prism.save();

  const reverseHolo = new CardRarity();
  reverseHolo.name = 'Reverse Holo';
  await reverseHolo.save();

  //CardType
  const pokemon = new CardType();
  pokemon.name = 'Pokemon';
  await pokemon.save();

  const trainer = new CardType();
  trainer.name = 'Trainer';
  await trainer.save();

  const energy = new CardType();
  energy.name = 'Energy';
  await energy.save();

  // Set
  const baseSet = new Set();
  baseSet.name = 'Base First Edition';
  baseSet.release = ('09.01.1999');
  await baseSet.save();

  const rocket = new Set();
  rocket.name = 'Team Rocket First Edition';
  rocket.release = ('24.04.2000');
  await rocket.save();

  // Pokémon
  const pikachu = new Pokemon([electric]);
  pikachu.name = 'Pikachu';
  await pikachu.save();

  const charizard = new Pokemon([fire, flying]);
  charizard.name = 'Charizard';
  await charizard.save();

  // Card
  const pikachuFirst = new Card(pikachu, baseSet, common, pokemon);
  pikachuFirst.number = 58;
  pikachuFirst.name = 'Pikachu';
  pikachuFirst.image = './images/base_first/common/pikachu.png';
  await pikachuFirst.save();

  const charizardHoloFirst = new Card(charizard, baseSet, holo, pokemon);
  charizardHoloFirst.number = 4;
  charizardHoloFirst.name = 'Charizard';
  charizardHoloFirst.image = './images/base_first/holo/charizard.png';
  await charizardHoloFirst.save();

  const darkCharizard = new Card(charizard, rocket, rare, pokemon);
  darkCharizard.number = 21;
  darkCharizard.name = 'Dark Charizard';
  darkCharizard.image = './images/rocket_first/rare/charizard.png';
  await darkCharizard.save();

  const darkCharizardHolo = new Card(charizard, rocket, holo, pokemon);
  darkCharizardHolo.number = 4;
  darkCharizardHolo.name = 'Dark Charizard';
  darkCharizardHolo.image = './images/rocket_first/rare/charizard_holo.png';
  await darkCharizard.save();
};