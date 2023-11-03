



class Key {
    private signature: number 
    constructor() {
        this.signature = Math.random()
    }

    public getSignature(this: Key) {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(this:Person) {
      return this.key
    }
}

abstract class House {
    protected tenants: Person[] = [];
    protected door: boolean
    
    constructor(protected key: Key) {
        this.door = false;
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    abstract openDoor(key:Key): void; 
}

class MyHouse extends House {
    constructor(key:Key) {
        super(key)
    }

    public openDoor(key: Key) {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};