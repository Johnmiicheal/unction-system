import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import items from '../items';

export default function Products() {
  return (
    <Grid container spacing={2} alignItems='center' justifyContent='center' sx={{ mt: 5 }}>
    {items.map(( product, i) => (
         <Card sx={{ maxWidth: 345, mr: 2, mb: 2 }} key={i}> 
         <CardMedia
           component="img"
           height="140"
           image={product.img}
           alt="product picture"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {product.title}
           </Typography>
           <Typography variant="body2" color="text.secondary"> {product.price} </Typography>
           <Typography variant="body2" color="text.secondary">
             Lizards are a widespread group of squamate reptiles, with over 6,000
             species, ranging across all continents except Antarctica
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small">Place Bid</Button>
         </CardActions>
       </Card>
    ))}
    </Grid>
   
  );
}
