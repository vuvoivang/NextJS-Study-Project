import { products } from '../../../data/product'

export default function handler({ query: { id } }, res) {

    // debugger
    const filtered = products.filter((product) => product.id == id)

    if (filtered.length > 0) {
        res.status(200).json(filtered[0]) // the first match item
    } else {
        res
            .status(404)
            .json({ status: "NOT_FOUND", message: `Product with the id of ${id} is not found` })
    }
}