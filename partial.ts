//Partial serve para criar um tipo que torna todas as propriedades de um tipo opcional. Isso é útil quando você deseja criar um objeto que pode ter apenas algumas das propriedades de um tipo existente.
interface User {
  name: string;
  id: number;
  email: string;
}

const user: User = {
  name: "John Doe",
  id: 1,
  email: "jose@email.com"
};

const updatedUser: Partial<User> = { name: "José" }