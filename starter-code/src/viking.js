//Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage) {
        let mensaje;
        this.health -= damage;
        if (this.health != 0) {
            mensaje = `${viking.name} has received ${damage} points of damage`;
        } else {
            mensaje = `${viking.name} has died in act of combat`;
        }
        return mensaje;
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}
let viking = new Viking("Harald", 150, 300);



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

    }
    receiveDamage(damage) {
        let mensaje;
        this.health -= damage;
        if (this.health != 0) {
            mensaje = `${Saxon} A Saxon has received ${damage} points of damage`;
        } else {
            mensaje = `${Saxon} A Saxon has died in combat`;
        }
        return mensaje;
    }
}

let saxon = new Saxon(60, 25);

// War
class War {
    constructor() {
        let vikingArmy = [];
        let saxonArmy = [];
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
    }

    addViking(Viking) {


    }
    addSaxon(Saxon) {

    }
    vikingAttack() {}
    saxonAttack() {}
    showStatus() {}

}