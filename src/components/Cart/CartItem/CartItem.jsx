import React from 'react'
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core';

import useStyles from './styles'

const CartItem = ({item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  console.log(item)

  return (
    <div>
      <Card>
        <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" style={{marginRight: '10px'}}>{item.name}</Typography>
          <Typography variant="h5" style={{marginTop: '8px'}}>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>

        <CardContent className={classes.subCardContent} spacing={1}>
          <Typography variant="h6">{item.selected_options[0].group_name}: {item.selected_options[0].option_name}</Typography>
          <Typography variant="h6">{item.selected_options[1].group_name}: {item.selected_options[1].option_name}</Typography>
        </CardContent>

        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          </div>

          <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartItem
