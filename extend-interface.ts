interface Person {
  id: number,
  name: string
}

interface Teacher extends Person {
  //id: number,
  //name: string
  subjects: string[]
}

interface Student extends Person {
  //id: number,
  //name: string
  age: number
}

let Teacher = { id: 1, name: "Rodrigo", subjects: ["JavaScript", "TypeScript"] }
let Student =  { id: 2, name: "José", age: 29}

