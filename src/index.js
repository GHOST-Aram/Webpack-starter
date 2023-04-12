import './styles/styles.scss'
import './styles/styles.css'

import('./images/Laughing-Smiley.svg')
    .then(({default: laugh}) =>{
        const laughImg = document.querySelectorAll('img')
        laughImg.forEach(img => {
            img.src = laugh
            console.log(`This is the image element ${img}`)
        })
    })
    .catch((error)=> console.log(`${error} occured while loading images`))

import('./module1').then(({default: User}) =>{
    const student = new User()
    student.setAge(32)
    student.setName('Rayson')
    console.log(`Student Object ${student}`)
})




