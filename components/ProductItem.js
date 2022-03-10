import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
// for override css in
const useStyles = makeStyles({
    root: {
        paddingBottom: 0
    },
});
const ProductItem = ({ product }) => {
    // as={`/product/${product.id}`}: id from specific product 
    // ``: backtick
    const classes = useStyles();
    return (

        <div className='p-3'>
            <Card className='card-product-item p-3' sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="smart watch"
                    image={product.image}

                    height="300"
                    style={{ objectFit: "contain" }}
                />
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <CardContent className={classes.root}>
                        <Typography gutterBottom variant="h4" align='center' style={{ color: "blue" }} component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.detail.slice(0, 95) + '...'}
                        </Typography>

                        <Typography className='mt-2' variant="h5" align='center' style={{ color: "red" }} component="div">
                            {product.price + ".000" + " VND"}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Link href="/products/[id]" as={`/products/${product.id}`}>
                            <Button className='btn btn-detail'>Detail</Button>
                        </Link>
                    </CardActions>
                </div>
            </Card ></div >


    )
}

export default ProductItem