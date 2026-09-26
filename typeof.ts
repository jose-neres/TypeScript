interface Product {
  id: number
  name: string
}

const product1: Product = { id: 1, name: "teclado" }

const product2: typeof product1 = { id: 2, name: "mouse" }