interface Product1 {
    id: number,
    name: string
}

function newProduct1 (product: Product1) {

}

newProduct1({ id: 1, name: "teclado" })

type SelectResponse = Product1[] | null

function selectProducts(): SelectResponse {
    return null
}