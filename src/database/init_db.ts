import { createConnection } from 'typeorm';
import { Pokemon, Type, Card, CardType, Set, CardRarity } from '../models';

export const init_db = async() => {
  const connection = await createConnection();
  await connection.dropDatabase();
  await connection.synchronize();

  // Types
  const bug = new Type();
  bug.name = 'Käfer';
  await bug.save();

  const dark = new Type();
  dark.name = 'Unlicht';
  await dark.save();

  const dragon = new Type();
  dragon.name = 'Drache';
  await dragon.save();

  const electric = new Type();
  electric.name = 'Elektro';
  await electric.save();

  const fairy = new Type();
  fairy.name = 'Fee';
  await fairy.save()

  const figthing = new Type();
  figthing.name = 'Kampf';
  await figthing.save()

  const fire = new Type();
  fire.name = 'Feuer';
  await fire.save()

  const flight = new Type();
  flight.name = 'Flug';
  await flight.save()

  const flying = new Type();
  flying.name = 'Flug';
  await flying.save()

  const ghost = new Type();
  ghost.name = 'Geist';
  await ghost.save()

  const grass = new Type();
  grass.name = 'Pflanze';
  await grass.save()

  const ground = new Type();
  ground.name = 'Boden';
  await ground.save()

  const ice = new Type();
  ice.name = 'Eis';
  await ice.save()

  const normal = new Type();
  normal.name = 'Normal';
  await normal.save()

  const poison = new Type();
  poison.name = 'Gift';
  await poison.save()

  const psychic = new Type();
  psychic.name = 'Psycho';
  await psychic.save()

  const rock = new Type();
  rock.name = 'Gestein';
  await rock.save()

  const steel = new Type();
  steel.name = 'Stahl';
  await steel.save()

  const water = new Type();
  water.name = 'Wasser';
  await water.save()

  // Pokémon
  const pikachu = new Pokemon(electric);
  pikachu.name = 'Pikachu';
  await pikachu.save();

  const charizard = new Pokemon(fire);
  charizard.name = 'Glurak';
  await charizard.save();

  // CardRarity
  const holo = new CardRarity();
  holo.name = 'Holo';
  await holo.save();

  const rare = new CardRarity();
  rare.name = 'Selten';
  await rare.save();

  const common = new CardRarity();
  common.name = 'Normal';
  await common.save();

  //CardType
  const pokemon = new CardType();
  pokemon.name = 'Pokemon';
  await pokemon.save();

  const trainer = new CardType();
  trainer.name = 'Trainer';
  await trainer.save();

  const energy = new CardRarity();
  energy.name = 'Energie';
  await energy.save();


  // Set
  const baseSet = new Set();
  baseSet.name = 'Basis First Edition';
  baseSet.release = ('09.01.1999');
  await baseSet.save();

  const rocket = new Set();
  rocket.name = 'Team Rocket First Edition';
  rocket.release = ('24.04.2000');
  await rocket.save();

  // Card
  const pikachuFirst = new Card(pikachu, baseSet, common, pokemon);
  pikachuFirst.name = 'Pikachu';
  pikachuFirst.image = './images';
  await pikachuFirst.save();

  const charizardHoloFirst = new Card(charizard, baseSet, holo, pokemon);
  charizardHoloFirst.name = 'Glurak';
  charizardHoloFirst.image = './images';
  await charizardHoloFirst.save();

  const darkCharizard = new Card(charizard, rocket, rare, pokemon);
  darkCharizard.name = 'Dunkles Glurak';
  darkCharizard.image = './images';
  await darkCharizard.save();
};