export default class User{
    constructor(name, age){
        this._setName(name)
        this._setAge(age)
    }
    
    _setName(name){
        this.name = name
    }
    _setAge(age){
        this.age = age
    }
    _getName(){
        return this.name
    }
    _getAge(){
        return this.age
    }
    sayName(){
        console.log(`User's name is ${this._getName()}`)
    }

    printAge(){
        console.log(`User's age is ${this._getAge()}`)
    }
}