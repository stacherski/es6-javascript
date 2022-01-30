class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }
  makeNoise = (sound = "Loud Noise") => {
    console.log(sound);
  };

  //getter function can't be arrow function
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  //static function can be arrow function
  static isAnimal = () => {
    return true;
  };
}

class Mouse extends Animal {
  constructor(type = "Mouse", legs = 4, tail = true) {
    super(type, legs);
    this.tail = tail;
  }
  makeNoise = (sound = "Squeak") => {
    console.log(sound);
  };
}

class Player {
  constructor(name = "Messi", country = "Argentina", sport = "football") {
    this.name = name;
    this.country = country;
    this.sport = sport;
  }

  getInfo = () => {
    console.log(`${this.name} was born in ${this.country}`);
  };
}

class TennisPlayer extends Player {
  constructor(
    name = "Rafael Nadal",
    country = "Brazil",
    sport = "Tennis",
    age = 34
  ) {
    super(name, country, sport);
    this.age = age;
  }
  getInfo = () => {
    console.log(
      `${this.name} is ${this.age} years old, was born in ${this.country} and plays ${this.sport}`
    );
  };
}
export { Animal, Mouse, Player, TennisPlayer };
