// Pick serve para escolher apenas para escolher algumas propriedades de um tipo existente. Isso é útil quando você deseja criar um objeto que contém apenas algumas das propriedades de um tipo maior.

interface Book {
  title: string
  pages: number
  author: string
}

const book: Pick<Book, "title" | "author"> = { title: "typescript", author:"Joao" }