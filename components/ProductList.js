import ProductItem from './ProductItem';
const ProductList = ({ products }) => {
    return (
        <div className='container' >
            <div className='row py-5' style={{ boxSizing: 'border-box' }}>
                {products.map(product => (<div className="col-md-4"><ProductItem key={product.id} product={product}></ProductItem></div>))}
            </div>

        </div >
    )
}

export default ProductList