import ProductItem from './ProductItem';
const ProductList = ({ products }) => {
    return (
        <div className='container' >
            <div className='row py-5' style={{ boxSizing: 'border-box' }}>
                {products.map(product => (<ProductItem className="col-md-4" key={product.id} product={product}></ProductItem>))}
            </div>

        </div >
    )
}

export default ProductList