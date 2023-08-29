class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
      this.name = name;
      this.health = health;
      this.speed = speed;
      this.strength = strength;
    }
    sayName() {
      console.log("your name is " + this.name);
    }
    showStats() { 
      console.log(
        "Name: " + this.name,
        "Health: " + this.health,
        "Speed: " + this.speed,
        "Strength: " + this.strength
      );
      // ^noticed i could put back tics in the quotes like below
    }
    drinkSake(){
      this.health += 10
      console.log(
          `\nName: ${this.name}
          Health: ${this.health}
          Speed: ${this.speed}
          Strength: ${this.strength}\n`
        );
    }
  }

class Sensie extends Ninja {
    constructor (name) {
        super(name, 200, 10, 10)
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake()
        console.log(`wisdom: ${this.wisdom}`)
        console.log("what one programmer can do in one month, two programmers can do in two months\n")
    }
}
  
//   const user1 = new Ninja("Ethan")
  const user2 = new Sensie("Master Splinter")
  user2.speakWisdom()
  user2.showStats()