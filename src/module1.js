export default class User{
    #religion
    #ocupation
    constructor(){
       let name, age
    }

    
    getAge(){
        return this.age
    }
    getOccupation(){
        return this.#ocupation
    }
    getName(){
        return this.name
    }
    getReligion(){
        return this.#religion
    }
    printAge(){
        console.log(`User's age is ${this.getAge()}`)
    }
    sayName(){
        console.log(`User's name is ${this.getName()}`)
    }
    setAge(age){
        this.age = age
    }
    setOcupation(ocupation){
        this.#ocupation = ocupation
    }
    setName(name){
        this.name = name
    }
    setReligion(religion){
        this.#religion = religion
    }

}
