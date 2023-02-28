import User from './module1'
console.log('Call Jacks')
const student = new User('Jared', 23)
student.sayName()
student.printAge()
student.age = 34
student.printAge()
