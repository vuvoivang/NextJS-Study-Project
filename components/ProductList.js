import ProductItem from './ProductItem';
const ProductList = ({ products }) => {
    return (
        <div className='container' >
            <div className='row py-5' style={{ boxSizing: 'border-box' }}>
                {products.map(product => (<div key={product.id} className="col-12 col-sm-6 col-md-4"><ProductItem product={product}></ProductItem></div>))}
            </div>

        </div >
    )
}

export default ProductList