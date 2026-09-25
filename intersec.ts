
type Person = {
  id: number,
  name: string
}

type Teacher = Person & {
  subject: string[]
}

type Student = Person & {
  age: number
}


let teacher: Teacher
let student: Student

