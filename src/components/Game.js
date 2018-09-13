import React from 'react';
import Scoreboard from './Scoreboard';
import PlayerFieldContainer from './PlayerFieldContainer';
import BoxScore from './BoxScore';
import { v4 } from 'uuid';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.nameData = {
      "firstName": [
        "An",
        "Alfr",
        "Alvi",
        "Ari",
        "Arinbjorn",
        "Arngeir",
        "Arngrim",
        "Arnfinn",
        "Asgeirr",
        "Askell",
        "Asvald",
        "Bard",
        "Baror",
        "Bersi",
        "Borkr",
        "Bjarni",
        "Bjorn",
        "Brand",
        "Brandr",
        "Cairn",
        "Canute",
        "Dar",
        "Einarr",
        "Eirik",
        "Egill",
        "Engli",
        "Eyvindr",
        "Erik",
        "Eyvind",
        "Finnr",
        "Floki",
        "Fromund",
        "Geirmundr",
        "Geirr",
        "Geri",
        "Gisli",
        "Gizzur",
        "Gjafvaldr",
        "Glumr",
        "Gorm",
        "Grmir",
        "Gunnarr",
        "Guomundr",
        "Hak",
        "Halbjorn",
        "Halfdan",
        "Hallvard",
        "Hamal",
        "Hamundr",
        "Harald",
        "Harek",
        "Hedinn",
        "Helgi",
        "Henrik",
        "Herbjorn",
        "Herjolfr",
        "Hildir",
        "Hogni",
        "Hrani",
        "Ivarr",
        "Hrolf",
        "Jimmy",
        "Jon",
        "Jorund",
        "Kalf",
        "Ketil",
        "Kheldar",
        "Klaengr",
        "Knut",
        "Kolbeinn",
        "Kolli",
        "Kollr",
        "Lambi",
        "Magnus",
        "Moldof",
        "Mursi",
        "Njall",
        "Oddr",
        "Olaf",
        "Orlyg",
        "Ormr",
        "Ornolf",
        "Osvald",
        "Ozurr",
        "Poror",
        "Prondir",
        "Ragi",
        "Ragnvald",
        "Refr",
        "Runolf",
        "Saemund",
        "Siegfried",
        "Sigmundr",
        "Sigurd",
        "Sigvat",
        "Skeggi",
        "Skomlr",
        "Slode",
        "Snorri",
        "Sokkolf",
        "Solvi",
        "Surt",
        "Sven",
        "Thangbrand",
        "Thjodoft",
        "Thorod",
        "Thorgest",
        "Thorvald",
        "Thrain",
        "Throst",
        "Torfi",
        "Torix",
        "Tryfing",
        "Ulf",
        "Valgaror",
        "Vali",
        "Vifil",
        "Vigfus",
        "Vika",
        "Waltheof"
      ],
      "lastNamePrefix": [
        "Aesir",
        "Axe",
        "Battle",
        "Bear",
        "Berg",
        "Biscuit",
        "Black",
        "Blade",
        "Blood",
        "Blue",
        "Boar",
        "Board",
        "Bone",
        "Cage",
        "Cave",
        "Chain",
        "Cloud",
        "Coffee",
        "Code",
        "Death",
        "Dragon",
        "Dwarf",
        "Eel",
        "Egg",
        "Elk",
        "Fire",
        "Fjord",
        "Flame",
        "Flour",
        "Forge",
        "Fork",
        "Fox",
        "Frost",
        "Furnace",
        "Cheese",
        "Giant",
        "Glacier",
        "Goat",
        "God",
        "Gold",
        "Granite",
        "Griffon",
        "Grim",
        "Haggis",
        "Hall",
        "Hamarr",
        "Helm",
        "Horn",
        "Horse",
        "House",
        "Huskarl",
        "Ice",
        "Iceberg",
        "Icicle",
        "Iron",
        "Jarl",
        "Kelp",
        "Kettle",
        "Kraken",
        "Lake",
        "Light",
        "Long",
        "Mace",
        "Mead",
        "Maelstrom",
        "Mail",
        "Mammoth",
        "Man",
        "Many",
        "Mountain",
        "Mutton",
        "Noun",
        "Oath",
        "One",
        "Owl",
        "Pain",
        "Peak",
        "Pine",
        "Pot",
        "Rabbit",
        "Rat",
        "Raven",
        "Red",
        "Refreshingbeverage",
        "Ring",
        "Rime",
        "Rock",
        "Root",
        "Rune",
        "Salmon",
        "Sap",
        "Sea",
        "Seven",
        "Shield",
        "Ship",
        "Silver",
        "Sky",
        "Slush",
        "Smoke",
        "Snow",
        "Spear",
        "Squid",
        "Steam",
        "Stone",
        "Storm",
        "Swine",
        "Sword",
        "Three",
        "Tongue",
        "Torch",
        "Troll",
        "Two",
        "Ulfsark",
        "Umlaut",
        "Unsightly",
        "Valkyrie",
        "Wave",
        "White",
        "Wolf",
        "Woman",
        "Worm",
        "Wyvern"
      ],
      "lastNameSuffix": [
        "admirer",
        "arm",
        "axe",
        "back",
        "bane",
        "baker",
        "basher",
        "beard",
        "bearer",
        "bender",
        "blade",
        "bleeder",
        "blender",
        "blood",
        "boiler",
        "bone",
        "boot",
        "borer",
        "born",
        "bow",
        "breaker",
        "breeder",
        "bringer",
        "brow",
        "builder",
        "chaser",
        "chiller",
        "collar",
        "counter",
        "curser",
        "dancer",
        "deck",
        "dottir",
        "doubter",
        "dreamer",
        "drinker",
        "drowner",
        "ear",
        "eater",
        "face",
        "fearer",
        "friend",
        "foot",
        "fury",
        "gorer",
        "grim",
        "grinder",
        "grower",
        "growth",
        "hacker",
        "hall",
        "hammer",
        "hand",
        "hands",
        "head",
        "hilt",
        "hugger",
        "hunter",
        "killer",
        "leg",
        "licker",
        "liker",
        "lost",
        "lover",
        "maker",
        "mender",
        "minder",
        "miner",
        "mocker",
        "monger",
        "neck",
        "puncher",
        "rage",
        "rhyme",
        "rider",
        "ringer",
        "roarer",
        "roller",
        "sailor",
        "screamer",
        "sequel",
        "server",
        "shield",
        "shoe",
        "singer",
        "skinner",
        "slinger",
        "slugger",
        "sniffer",
        "son",
        "smasher",
        "speaker",
        "stinker",
        "sucker",
        "sword",
        "tail",
        "tamer",
        "taster",
        "thigh",
        "tongue",
        "tosser",
        "tracker",
        "washer",
        "wielder",
        "wing",
        "wisher",
        "wrath"
      ]
    }
    this.state = {
      inTimeout: true,
      gameInfo: {
        timeRemaining: 720, //seconds in 12 mins
        quarter: 1,
        homePoints: 0,
        awayPoints: 0,
      },
      homeTeam: {
        timeOutsRemaining: 2,
        strategy: "neutral",
        players: this.createTeamPlayers()
      },
      awayTeam: {
        timeOutsRemaining: 2,
        strategy: "neutral",
        players: this.createTeamPlayers()
      }
    }
    this.handleSubPlayerIn = this.handleSubPlayerIn.bind(this);
  }

  //creates random player name
  createPlayer() {
    let first = this.randomNumber(this.nameData.firstName.length - 1);
    let lastPre = this.randomNumber(this.nameData.lastNamePrefix.length - 1);
    let lastSuff = this.randomNumber(this.nameData.lastNameSuffix.length - 1);
    return this.nameData.firstName[first] + " " + this.nameData.lastNamePrefix[lastPre] + this.nameData.lastNameSuffix[lastSuff];
  }

  //generates random number
  randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  //generates 10 random players
  createTeamPlayers() {
    let newTeamList = []
    for (let i = 0; i < 10; i++) {
      let newPlayer = {
        name: this.createPlayer(),
        offense: this.randomNumber(10),
        defense: this.randomNumber(10),
        endurance: this.randomNumber(10),
        stamina: 10,
        points: 0,
        active: false,
        id: v4()
      }
      newTeamList.push(newPlayer);
    }
    return newTeamList;
  }

  handleSubPlayerIn(id) {
    console.log(id)
    // let awayTeamPlayers = {...this.state.awayTeam};
    // console.log(awayTeamPlayers);
    // let homeTeamPlayers = {...this.state.homeTeam};
    // console.log(awayTeamPlayers);
    // console.log(Object.keys(awayTeamPlayers));

    // awayTeamPlayers.forEach((player) =>{
    //   if(player.id === id) {
    //     console.log(player);
    //     player.active = true;
    //   }
    // });

    // for (var property1 in object1) {
    //   string1 = string1 + object1[property1];
    // }

    // awayTeam.players.forEach((player) =>{
    //   if(player.id === id) {
    //     player.active = true;
    //   }
    // });
    // this.setState({awayTeam})
    // this.setState({homeTeamPlayers})
  }

  // code to change state
  // handleNewClick() {
  //     let awayTeam = {...this.state.awayTeam}
  //     console.log(awayTeam);
  //     awayTeam.timeOutsRemaining--;
  //     this.setState({awayTeam})
  // }

  render () {
    //styles start
    const gameContainer = {
      border: '1px solid black',
      padding: '15px',
      borderRadius: '15px',
      backgroundColor: 'lightblue'
    }
    //styles end

    return (
      <div style={gameContainer}>
        <Scoreboard gameInfo={this.state.gameInfo} inTimeout={this.state.inTimeout}/>
        <PlayerFieldContainer homeTeam={this.state.homeTeam} awayTeam={this.state.awayTeam} inTimeout={this.state.inTimeout} onSubPlayerIn={this.handleSubPlayerIn}/>
        <BoxScore />
      </div>
    )
  }
}

export default Game;
