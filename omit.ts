//Omit serve para criar um novo tipo que omite as propriedades especificadas de um tipo existente

interface Book {
    title: string   
    pages: number
    description: string
    author: string
}

const book: Omit<Book, "description"> = { title: "typescript", pages: 300, author: "João" }