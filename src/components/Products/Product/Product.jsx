import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import { Link } from 'react-router-dom';

const Product = ({ product, onSetProduct }) => {
  const [description, setDescription] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const description = product.description.replace(/(<p>|<\/p>)/g, " ").split('  ');
    description[0] = description[0].substring(1);
    setDescription(description)
  }, [product])

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.assets[0].url} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {description[0]}
        </Typography>
      </CardContent>

      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton component={Link} to="/product_details" ari-label="See Details" onClick={()=> onSetProduct(product)} color="default">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
