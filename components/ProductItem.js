import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const ProductItem = ({ product }) => {
    // as={`/product/${product.id}`}: id from specific product 
    // ``: backtick
    return (

        <div className='p-2'>
            <Card className='card-product-item' sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="smart watch"
                    image={product.image}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.detail}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href="/products/[id]" as={`/products/${product.id}`}>
                        <Button className='btn btn-detail'>Detail</Button>
                    </Link>
                </CardActions>
            </Card></div>


    )
}

export default ProductItem