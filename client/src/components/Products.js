import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import Grid from "@mui/material/Grid";
import items from '../items';

export default function Products() {
  return (
    <Grid container spacing={2} direction='row' alignItems='center' justifyContent='start' sx={{ background: '#cccccc' }}>
    <ImageList cols={3} sx={{ mt: 2, ml: 6 }}>
    
    {items.map(( product, i) => (
         <Card sx={{ maxWidth: 345, mb: 2, mr: 2 }} key={i}> 
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
           <Typography variant="body2" color="text.secondary"> ${product.price} </Typography>
           <Typography variant="body2" color="text.secondary">
             Lorem
           </Typography>
         </CardContent>
         <CardActions>
           <Button size="small">Place Bid</Button>
         </CardActions>
       </Card>
    ))}
    </ImageList>
    </Grid>
   
  );
}
