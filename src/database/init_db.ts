import { createConnection } from 'typeorm';
import { Pokemon, Type, Card, CardType, Set } from '../models';

export const init_db = async() => {
  const connection = await createConnection();
  await connection.dropDatabase();
  await connection.synchronize();

  // Types
  const electric = new Type();
  electric.name = 'Elektro';
  await electric.save();

  const fire = new Type();
  fire.name = 'Feuer';
  await fire.save();

  const water = new Type();
  water.name = 'Wasser';
  await water.save();

  const grass = new Type();
  grass.name = 'Pflanze';
  await grass.save();

  const flight = new Type();
  flight.name = 'Flug';
  await flight.save()

  // Pokémon
  const pikachu = new Pokemon(electric);
  pikachu.name = 'Pikachu';
  await pikachu.save();

  const charizard = new Pokemon(fire);
  charizard.name = 'Glurak';
  await charizard.save();

  // CardType
  const holo = new CardType();
  holo.name = 'Holo';
  await holo.save();

  const rare = new CardType();
  rare.name = 'Selten';
  await rare.save();

  const common = new CardType();
  common.name = 'Normal';
  await common.save();

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
  const pikachuFirst = new Card(pikachu, baseSet, common);
  await pikachuFirst.save();

  const chairzardHoloFirst = new Card(charizard, baseSet, holo);
  await chairzardHoloFirst.save();

  const darkCharizard = new Card(charizard, rocket, rare);
  await darkCharizard.save();
};