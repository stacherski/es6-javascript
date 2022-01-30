import { Animal, Mouse, Player, TennisPlayer } from "./MyClasses.js";

//Animal
let cat = new Animal("Cat", 4);
cat.makeNoise("Meow!");
console.log(Animal.isAnimal());
console.log(cat.metaData);

//Mouse
let mouse = new Mouse();
console.log(`Mouse has tail: ${mouse.tail}`);
mouse.makeNoise();

//Player
let playerOne = new Player();
playerOne.getInfo();
playerOne.sport = "snooker";
playerOne.getInfo();
console.log(`${playerOne.name}'s sport is ${playerOne.sport}`);

//TennisPlayer
let playerTwo = new TennisPlayer();
playerTwo.getInfo();
playerTwo.age = 36;
playerTwo.getInfo();
