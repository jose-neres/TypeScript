//Cria um objeto onde todas as chaves são strings e os valores são do tipo number

const scores: Record<string, number> = {
    "Rodrigo": 10,
    "mayk": 15,
}

//Limita valores

type Profile = "admin" | "guest" | "user"
const  user: Record<Profile, number> = {
    "admin": 1,
    "guest": 2,
    "user": 3, 
}

//Objetos personalizados

interface User {
    name: string
    email: string
}

const users: Record<number, User> = {
    1: { name: "Rodrigo", email: "rodrigo@email.com" },
    2: { name: "José", email: "Jose@email.com" }

}