import { createConnection } from 'typeorm';
import { Pokemon, Type, Card, CardType, Set, CardRarity } from '../models';

export const init_db = async () => {
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

  const fighting = new Type();
  fighting.name = 'Fighting';
  await fighting.save()

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
  baseSet.name = 'Base Set';
  baseSet.release = ('09.01.1999');
  await baseSet.save();

  const jungle = new Set();
  jungle.name = 'Jungle';
  jungle.release = ('16.06.1999');
  await jungle.save();

  const fossil = new Set();
  fossil.name = 'Gym Challenge';
  fossil.release = ('10.10.1999');
  await fossil.save();

  const base2 = new Set();
  base2.name = 'Base Set 2';
  base2.release = ('24.02.2000');
  await base2.save();

  const rocket = new Set();
  rocket.name = 'Team Rocket';
  rocket.release = ('24.04.2000');
  await rocket.save();

  const gymHereos = new Set();
  gymHereos.name = 'Gym Hereos';
  gymHereos.release = ('14.08.2000');
  await gymHereos.save();

  const gymChallenge = new Set();
  gymChallenge.name = 'Gym Challenge';
  gymChallenge.release = ('16.10.2000');
  await gymChallenge.save();

  const neoGenesis = new Set();
  neoGenesis.name = 'Neo Genesis';
  neoGenesis.release = ('16.12.2000');
  await neoGenesis.save();

  const neoDiscovery = new Set();
  neoDiscovery.name = 'Neo Discovery';
  neoDiscovery.release = ('01.06.2001');
  await neoDiscovery.save();

  const neoRevelation = new Set();
  neoRevelation.name = 'Neo Revelation';
  neoRevelation.release = ('21.09.2001');
  await neoRevelation.save();

  const neoDestiny = new Set();
  neoDestiny.name = 'Neo Destiny';
  neoDestiny.release = ('24.04.2000');
  await neoDestiny.save();

  const legendary = new Set();
  legendary.name = 'Legendary Collection';
  legendary.release = ('24.05.2002');
  await legendary.save();

  // Pokémon
  const bulbasaur = new Pokemon(1, [grass, poison]);
  bulbasaur.name = 'Bulbasaur';
  await bulbasaur.save();

  const ivysaur = new Pokemon(2, [grass, poison]);
  ivysaur.name = 'Ivysaur';
  await ivysaur.save();

  const venusaur = new Pokemon(3, [grass, poison]);
  venusaur.name = 'Venusaur';
  await venusaur.save();

  const charmander = new Pokemon(4, [fire]);
  charmander.name = 'Charmander';
  await charmander.save();

  const charmeleon = new Pokemon(5, [fire]);
  charmeleon.name = 'Charmeleon';
  await charmeleon.save();

  const charizard = new Pokemon(6, [fire, flying]);
  charizard.name = 'Charizard';
  await charizard.save();

  const squirtle = new Pokemon(7, [water]);
  squirtle.name = 'Squirtle';
  await squirtle.save();

  const wartortle = new Pokemon(8, [water]);
  wartortle.name = 'Wartortle';
  await wartortle.save();

  const blastoise = new Pokemon(9, [water]);
  blastoise.name = 'Blastoise';
  await blastoise.save();

  const caterpie = new Pokemon(10, [bug]);
  caterpie.name = 'Caterpie';
  await caterpie.save();

  const metapod = new Pokemon(11, [bug]);
  metapod.name = 'Metapod';
  await metapod.save();

  const butterfree = new Pokemon(12, [bug, flying]);
  butterfree.name = 'Butterfree';
  await butterfree.save();

  const weedle = new Pokemon(13, [bug, poison]);
  weedle.name = 'Weedle';
  await weedle.save();

  const kakuna = new Pokemon(14, [bug, poison]);
  kakuna.name = 'Kakuna';
  await kakuna.save();

  const beedrill = new Pokemon(15, [bug, poison]);
  beedrill.name = 'Beedrill';
  await beedrill.save();

  const pidgey = new Pokemon(16, [normal, flying]);
  pidgey.name = 'Pidgey';
  await pidgey.save();

  const pidgeotto = new Pokemon(17, [normal, flying]);
  pidgeotto.name = 'Pidgeotto';
  await pidgeotto.save();

  const pidgeot = new Pokemon(18, [normal, flying]);
  pidgeot.name = 'Pidgeot';
  await pidgeot.save();

  const rattata = new Pokemon(19, [normal]);
  rattata.name = 'Rattata';
  await rattata.save();

  const alolanRattata = new Pokemon(19, [dark, normal]);
  alolanRattata.name = 'Alolan Rattata';
  await alolanRattata.save();

  const raticate = new Pokemon(20, [normal]);
  raticate.name = 'Raticate';
  await raticate.save();

  const alolanRaticate = new Pokemon(20, [dark, normal]);
  alolanRaticate.name = 'Alolan Raticate';
  await alolanRaticate.save();

  const spearow = new Pokemon(21, [normal, flying]);
  spearow.name = 'Spearow';
  await spearow.save();

  const fearow = new Pokemon(22, [normal, flying]);
  fearow.name = 'Fearow';
  await fearow.save();

  const ekans = new Pokemon(23, [poison]);
  ekans.name = 'Ekans';
  await ekans.save();

  const arbok = new Pokemon(24, [poison]);
  arbok.name = 'Arbok';
  await arbok.save();

  const pikachu = new Pokemon(25, [electric]);
  pikachu.name = 'Pikachu';
  await pikachu.save();

  const raichu = new Pokemon(26, [electric]);
  raichu.name = 'Raichu';
  await raichu.save();

  const alolanRaichu = new Pokemon(26, [electric, psychic]);
  alolanRaichu.name = 'Alolan Raichu';
  await alolanRaichu.save();

  const sandshrew = new Pokemon(27, [ground]);
  sandshrew.name = 'Sandshrew';
  await sandshrew.save();

  const alolanSandshrew = new Pokemon(27, [ice, steel]);
  alolanSandshrew.name = 'Alolan Sandshrew';
  await alolanSandshrew.save();

  const sandslash = new Pokemon(28, [ground]);
  sandslash.name = 'Sandslash';
  await sandslash.save();

  const alolanSandslash = new Pokemon(28, [ice, steel]);
  alolanSandslash.name = 'Alolan Sandslash';
  await alolanSandslash.save();

  const nidoranFemale = new Pokemon(29, [poison]);
  nidoranFemale.name = 'Nidoran♀';
  await nidoranFemale.save();

  const nidorina = new Pokemon(30, [poison]);
  nidorina.name = 'Nidorina';
  await nidorina.save();

  const nidoqueen = new Pokemon(31, [poison, ground]);
  nidoqueen.name = 'Nidoqueen';
  await nidoqueen.save();

  const nidoranMale = new Pokemon(32, [poison]);
  nidoranMale.name = 'Nidoran♂';
  await nidoranMale.save();

  const nidorino = new Pokemon(33, [poison]);
  nidorino.name = 'Nidorino';
  await nidorino.save();

  const nidoking = new Pokemon(34, [poison, ground]);
  nidoking.name = 'Nidoking';
  await nidoking.save();

  const clefairy = new Pokemon(35, [fairy]);
  clefairy.name = 'Clefairy';
  await clefairy.save();

  const clefable = new Pokemon(36, [fairy]);
  clefable.name = 'Clefable';
  await clefable.save();

  const vulpix = new Pokemon(37, [fire]);
  vulpix.name = 'Vulpix';
  await vulpix.save();

  const alolanVulpix = new Pokemon(37, [ice]);
  alolanVulpix.name = 'Alolan Vulpix';
  await alolanVulpix.save();

  const ninetales = new Pokemon(38, [fire]);
  ninetales.name = 'Ninetales';
  await ninetales.save();

  const alolanNinetales = new Pokemon(38, [ice, fairy]);
  alolanNinetales.name = 'Alolan Ninetales';
  await alolanNinetales.save();

  const jigglypuff = new Pokemon(39, [normal, fairy]);
  jigglypuff.name = 'Jigglypuff';
  await jigglypuff.save();

  const wigglytuff = new Pokemon(40, [normal, fairy]);
  wigglytuff.name = 'Wigglytuff';
  await wigglytuff.save();

  const zubat = new Pokemon(41, [poison, flying]);
  zubat.name = 'Zubat';
  await zubat.save();

  const golbat = new Pokemon(42, [poison, flying]);
  golbat.name = 'Golbat';
  await golbat.save();

  const oddish = new Pokemon(43, [grass, poison]);
  oddish.name = 'Oddish';
  await oddish.save();

  const gloom = new Pokemon(44, [grass, poison]);
  gloom.name = 'Gloom';
  await gloom.save();

  const vileplume = new Pokemon(45, [grass, poison]);
  vileplume.name = 'Vileplume';
  await vileplume.save();

  const paras = new Pokemon(46, [bug, grass]);
  paras.name = 'Paras';
  await paras.save();

  const parasect = new Pokemon(47, [bug, grass]);
  parasect.name = 'Parasect';
  await parasect.save();

  const venonat = new Pokemon(48, [bug, poison]);
  venonat.name = 'Venonat';
  await venonat.save();

  const venomoth = new Pokemon(49, [bug, poison]);
  venomoth.name = 'Venomoth';
  await venomoth.save();

  const diglett = new Pokemon(50, [ground]);
  diglett.name = 'Diglett';
  await diglett.save();

  const alolanDiglett = new Pokemon(50, [ground, steel]);
  alolanDiglett.name = 'Alolan Diglett';
  await alolanDiglett.save();

  const dugtrio = new Pokemon(51, [ground]);
  dugtrio.name = 'Dugtrio';
  await dugtrio.save();

  const alolanDugtrio = new Pokemon(51, [ground, steel]);
  alolanDugtrio.name = 'Alolan Dugtrio';
  await alolanDugtrio.save();

  const meowth = new Pokemon(52, [normal]);
  meowth.name = 'Meowth';
  await meowth.save();

  const alolanMeowth = new Pokemon(52, [dark]);
  alolanMeowth.name = 'Alolan Meowth';
  await alolanMeowth.save();

  const galarianMeowth = new Pokemon(52, [steel]);
  galarianMeowth.name = 'Galarian Meowth';
  await galarianMeowth.save();

  const persian = new Pokemon(53, [normal]);
  persian.name = 'Persian';
  await persian.save();

  const alolanPersian = new Pokemon(53, [dark]);
  alolanPersian.name = 'Alolan Persian';
  await alolanPersian.save();

  const psyduck = new Pokemon(54, [water]);
  psyduck.name = 'Psyduck';
  await psyduck.save();

  const golduck = new Pokemon(55, [water]);
  golduck.name = 'Golduck';
  await golduck.save();

  const mankey = new Pokemon(56, [fighting]);
  mankey.name = 'Mankey';
  await mankey.save();

  const primeape = new Pokemon(57, [fighting]);
  primeape.name = 'Primeape';
  await primeape.save();

  const growlithe = new Pokemon(58, [fire]);
  growlithe.name = 'Growlithe';
  await growlithe.save();

  const arcanine = new Pokemon(59, [fire]);
  arcanine.name = 'Arcanine';
  await arcanine.save();

  const poliwag = new Pokemon(60, [water]);
  poliwag.name = 'Poliwag';
  await poliwag.save();

  const poliwhirl = new Pokemon(61, [water]);
  poliwhirl.name = 'Poliwhirl';
  await poliwhirl.save();

  const poliwrath = new Pokemon(62, [water, fighting]);
  poliwrath.name = 'Poliwrath';
  await poliwrath.save();

  const abra = new Pokemon(63, [psychic]);
  abra.name = 'Abra';
  await abra.save();

  const kadabra = new Pokemon(64, [psychic]);
  kadabra.name = 'Kadabra';
  await kadabra.save();

  const alakazam = new Pokemon(65, [psychic]);
  alakazam.name = 'Alakazam';
  await alakazam.save();

  const machop = new Pokemon(66, [fighting]);
  machop.name = 'Machop';
  await machop.save();

  const machoke = new Pokemon(67, [fighting]);
  machoke.name = 'Machoke';
  await machoke.save();

  const machamp = new Pokemon(68, [fighting]);
  machamp.name = 'Machamp';
  await machamp.save();

  const bellsprout = new Pokemon(69, [grass, poison]);
  bellsprout.name = 'Bellsprout';
  await bellsprout.save();

  const weepinbell = new Pokemon(70, [grass, poison]);
  weepinbell.name = 'Weepinbell';
  await weepinbell.save();

  const victreebel = new Pokemon(71, [grass, poison]);
  victreebel.name = 'Victreebel';
  await victreebel.save();

  const tentacool = new Pokemon(72, [water, poison]);
  tentacool.name = 'Tentacool';
  await tentacool.save();

  const tentacruel = new Pokemon(73, [water, poison]);
  tentacruel.name = 'Tentacruel';
  await tentacruel.save();

  const geodude = new Pokemon(74, [rock, ground]);
  geodude.name = 'Geodude';
  await geodude.save();

  const alolanGeodude = new Pokemon(74, [rock, electric]);
  alolanGeodude.name = 'Alolan Geodude';
  await alolanGeodude.save();

  const graveler = new Pokemon(75, [rock, ground]);
  graveler.name = 'Graveler';
  await graveler.save();

  const alolanGraveler = new Pokemon(75, [rock, electric]);
  alolanGraveler.name = 'Alolan Graveler';
  await alolanGraveler.save();

  const golem = new Pokemon(76, [rock, ground]);
  golem.name = 'Golem';
  await golem.save();

  const alolanGolem = new Pokemon(76, [rock, electric]);
  alolanGolem.name = 'Alolan Golem';
  await alolanGolem.save();

  const ponyta = new Pokemon(77, [fire]);
  ponyta.name = 'Ponyta';
  await ponyta.save();

  const galarianPonyta = new Pokemon(77, [psychic]);
  galarianPonyta.name = 'Galarian Ponyta';
  await galarianPonyta.save();

  const rapidash = new Pokemon(78, [fire]);
  rapidash.name = 'Rapidash';
  await rapidash.save();

  const galarianRapidash = new Pokemon(78, [psychic, fairy]);
  galarianRapidash.name = 'Galarian Rapidash';
  await galarianRapidash.save();

  const slowpoke = new Pokemon(79, [water, psychic]);
  slowpoke.name = 'Slowpoke';
  await slowpoke.save();

  const galarianSlowpoke = new Pokemon(79, [psychic]);
  galarianSlowpoke.name = 'Galarian Slowpoke';
  await galarianSlowpoke.save();

  const slowbro = new Pokemon(80, [water, psychic]);
  slowbro.name = 'Slowbro';
  await slowbro.save();

  const galarianSlowbro = new Pokemon(80, [poison, psychic]);
  galarianSlowbro.name = 'Galarian Slowbro';
  await galarianSlowbro.save();

  const magnemite = new Pokemon(81, [electric, steel]);
  magnemite.name = 'Magnemite';
  await magnemite.save();

  const magneton = new Pokemon(82, [electric, steel]);
  magneton.name = 'Magneton';
  await magneton.save();

  const farfetchd = new Pokemon(83, [normal, flying]);
  farfetchd.name = 'Farfetchd';
  await farfetchd.save();

  const galarianFarfetchd = new Pokemon(83, [fighting]);
  galarianFarfetchd.name = 'Galarian Farfetchd';
  await galarianFarfetchd.save();

  const doduo = new Pokemon(84, [normal, flying]);
  doduo.name = 'Doduo';
  await doduo.save();

  const dodrio = new Pokemon(85, [normal, flying]);
  dodrio.name = 'Dodrio';
  await dodrio.save();

  const seel = new Pokemon(86, [water]);
  seel.name = 'Seel';
  await seel.save();

  const dewgong = new Pokemon(87, [water, ice]);
  dewgong.name = 'Dewgong';
  await dewgong.save();

  const grimer = new Pokemon(88, [poison]);
  grimer.name = 'Grimer';
  await grimer.save();

  const alolanGrimer = new Pokemon(88, [poison, dark]);
  alolanGrimer.name = 'Alolan Grimer';
  await alolanGrimer.save();

  const muk = new Pokemon(89, [poison]);
  muk.name = 'Muk';
  await muk.save();

  const alolanMuk = new Pokemon(89, [poison, dark]);
  alolanMuk.name = 'Alolan Muk';
  await alolanMuk.save();

  const shellder = new Pokemon(90, [water]);
  shellder.name = 'Shellder';
  await shellder.save();

  const cloyster = new Pokemon(91, [water, ice]);
  cloyster.name = 'Cloyster';
  await cloyster.save();

  const gastly = new Pokemon(92, [ghost, poison]);
  gastly.name = 'Gastly';
  await gastly.save();

  const haunter = new Pokemon(93, [ghost, poison]);
  haunter.name = 'Haunter';
  await haunter.save();

  const gengar = new Pokemon(94, [ghost, poison]);
  gengar.name = 'Gengar';
  await gengar.save();

  const onix = new Pokemon(95, [rock, ground]);
  onix.name = 'Onix';
  await onix.save();

  const drowzee = new Pokemon(96, [psychic]);
  drowzee.name = 'Drowzee';
  await drowzee.save();

  const hypno = new Pokemon(97, [psychic]);
  hypno.name = 'Hypno';
  await hypno.save();

  const krabby = new Pokemon(98, [water]);
  krabby.name = 'Krabby';
  await krabby.save();

  const kingler = new Pokemon(99, [water]);
  kingler.name = 'Kingler';
  await kingler.save();

  const voltorb = new Pokemon(100, [electric]);
  voltorb.name = 'Voltorb';
  await voltorb.save();

  const electrode = new Pokemon(101, [electric]);
  electrode.name = 'Electrode';
  await electrode.save();

  const exeggcute = new Pokemon(102, [grass, psychic]);
  exeggcute.name = 'Exeggcute';
  await exeggcute.save();

  const exeggutor = new Pokemon(103, [grass, psychic]);
  exeggutor.name = 'Exeggutor';
  await exeggutor.save();

  const alolanExeggutor = new Pokemon(103, [grass, dragon]);
  alolanExeggutor.name = 'Alolan Exeggutor';
  await alolanExeggutor.save();

  const cubone = new Pokemon(104, [ground]);
  cubone.name = 'Cubone';
  await cubone.save();

  const marowak = new Pokemon(105, [ground]);
  marowak.name = 'Marowak';
  await marowak.save();

  const alolanMarowak = new Pokemon(105, [fire, ghost]);
  alolanMarowak.name = 'Alolan Marowak';
  await alolanMarowak.save();

  const hitmonlee = new Pokemon(106, [fighting]);
  hitmonlee.name = 'Hitmonlee';
  await hitmonlee.save();

  const hitmonchan = new Pokemon(107, [fighting]);
  hitmonchan.name = 'Hitmonchan';
  await hitmonchan.save();

  const lickitung = new Pokemon(108, [normal]);
  lickitung.name = 'Lickitung';
  await lickitung.save();

  const koffing = new Pokemon(109, [poison]);
  koffing.name = 'Koffing';
  await koffing.save();

  const weezing = new Pokemon(110, [poison]);
  weezing.name = 'Weezing';
  await weezing.save();

  const galarianWeezing = new Pokemon(110, [poison, fairy]);
  galarianWeezing.name = 'Galarian Weezing';
  await galarianWeezing.save();

  const rhyhorn = new Pokemon(111, [ground, rock]);
  rhyhorn.name = 'Rhyhorn';
  await rhyhorn.save();

  const rhydon = new Pokemon(112, [ground, rock]);
  rhydon.name = 'Rhydon';
  await rhydon.save();

  const chansey = new Pokemon(113, [normal]);
  chansey.name = 'Chansey';
  await chansey.save();

  const tangela = new Pokemon(114, [grass]);
  tangela.name = 'Tangela';
  await tangela.save();

  const kangaskhan = new Pokemon(115, [normal]);
  kangaskhan.name = 'Kangaskhan';
  await kangaskhan.save();

  const horsea = new Pokemon(116, [water]);
  horsea.name = 'Horsea';
  await horsea.save();

  const seadra = new Pokemon(117, [water]);
  seadra.name = 'Seadra';
  await seadra.save();

  const goldeen = new Pokemon(118, [water]);
  goldeen.name = 'Goldeen';
  await goldeen.save();

  const seaking = new Pokemon(119, [water]);
  seaking.name = 'Seaking';
  await seaking.save();

  const staryu = new Pokemon(120, [water]);
  staryu.name = 'Staryu';
  await staryu.save();

  const starmie = new Pokemon(121, [water, psychic]);
  starmie.name = 'Starmie';
  await starmie.save();

  const mrMime = new Pokemon(122, [psychic, fairy]);
  mrMime.name = 'Mr. Mime';
  await mrMime.save();

  const galarianMrMime = new Pokemon(122, [ice, psychic]);
  galarianMrMime.name = 'Galarian Mr. Mime';
  await galarianMrMime.save();

  const scyther = new Pokemon(123, [bug, flying]);
  scyther.name = 'Scyther';
  await scyther.save();

  const jynx = new Pokemon(124, [ice, psychic]);
  jynx.name = 'Jynx';
  await jynx.save();

  const electabuzz = new Pokemon(125, [electric]);
  electabuzz.name = 'Electabuzz';
  await electabuzz.save();

  const magmar = new Pokemon(126, [fire]);
  magmar.name = 'Magmar';
  await magmar.save();

  const pinsir = new Pokemon(127, [bug]);
  pinsir.name = 'Pinsir';
  await pinsir.save();

  const tauros = new Pokemon(128, [normal]);
  tauros.name = 'Tauros';
  await tauros.save();

  const magikarp = new Pokemon(129, [water]);
  magikarp.name = 'Magikarp';
  await magikarp.save();

  const gyarados = new Pokemon(130, [water, flying]);
  gyarados.name = 'Gyarados';
  await gyarados.save();

  const lapras = new Pokemon(131, [water, ice]);
  lapras.name = 'Lapras';
  await lapras.save();

  const ditto = new Pokemon(132, [normal]);
  ditto.name = 'Ditto';
  await ditto.save();

  const eevee = new Pokemon(133, [normal]);
  eevee.name = 'Eevee';
  await eevee.save();

  const vaporeon = new Pokemon(134, [water]);
  vaporeon.name = 'Vaporeon';
  await vaporeon.save();

  const jolteon = new Pokemon(135, [electric]);
  jolteon.name = 'Jolteon';
  await jolteon.save();

  const flareon = new Pokemon(136, [fire]);
  flareon.name = 'Flareon';
  await flareon.save();

  const porygon = new Pokemon(137, [normal]);
  porygon.name = 'Porygon';
  await porygon.save();

  const omanyte = new Pokemon(138, [rock, water]);
  omanyte.name = 'Omanyte';
  await omanyte.save();

  const omastar = new Pokemon(139, [rock, water]);
  omastar.name = 'Omastar';
  await omastar.save();

  const kabuto = new Pokemon(140, [rock, water]);
  kabuto.name = 'Kabuto';
  await kabuto.save();

  const kabutops = new Pokemon(141, [rock, water]);
  kabutops.name = 'Kabutops';
  await kabutops.save();

  const aerodactyl = new Pokemon(142, [rock, flying]);
  aerodactyl.name = 'Aerodactyl';
  await aerodactyl.save();

  const snorlax = new Pokemon(143, [normal]);
  snorlax.name = 'Snorlax';
  await snorlax.save();

  const articuno = new Pokemon(144, [ice, flying]);
  articuno.name = 'Articuno';
  await articuno.save();

  const galarianSrticuno = new Pokemon(144, [psychic, flying]);
  galarianSrticuno.name = 'Galarian Articuno';
  await galarianSrticuno.save();

  const zapdos = new Pokemon(145, [electric, flying]);
  zapdos.name = 'Zapdos';
  await zapdos.save();

  const galarianZapdos = new Pokemon(145, [fighting, flying]);
  galarianZapdos.name = 'Galarian Zapdos';
  await galarianZapdos.save();

  const moltres = new Pokemon(146, [fire, flying]);
  moltres.name = 'Moltres';
  await moltres.save();

  const galarianMoltres = new Pokemon(146, [dark, flying]);
  galarianMoltres.name = 'Galarian Moltres';
  await galarianMoltres.save();

  const dratini = new Pokemon(147, [dragon]);
  dratini.name = 'Dratini';
  await dratini.save();

  const dragonair = new Pokemon(148, [dragon]);
  dragonair.name = 'Dragonair';
  await dragonair.save();

  const dragonite = new Pokemon(149, [dragon, flying]);
  dragonite.name = 'Dragonite';
  await dragonite.save();

  const mewtwo = new Pokemon(150, [psychic]);
  mewtwo.name = 'Mewtwo';
  await mewtwo.save();

  const mew = new Pokemon(151, [psychic]);
  mew.name = 'Mew';
  await mew.save();


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