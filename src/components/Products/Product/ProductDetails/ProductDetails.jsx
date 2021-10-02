import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, Grid, InputLabel, Select, MenuItem, ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton } from '@material-ui/core';
import useStyles from './styles'
import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { Favorite } from '@material-ui/icons'


const ProductDetails = ({ product, onAddToCart }) => {
  const [colorsGroupId, setColorsGroupId] = useState('');
  const [color, setColor] = useState('');
  const [sizesGroupId, setSizesGroupId] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const methods = useForm();

  const classes = useStyles();

  const variantGroups = product.variant_groups.map(({ options, name, id }) => ({
    name,
    id,
    options: options.map(({id, name}) => ({id, name})),
  }));

  const productColors = Object.entries(variantGroups[0].options).map(([key, value]) => ({
    id: value.id,
    label: value.name
  }));

  console.log(variantGroups)

  const productSizes = Object.entries(variantGroups[1].options).map(([key, value]) => ({
    id: value.id,
    label: value.name
  }));

  console.log(productSizes)

  useEffect(() => {
    setColorsGroupId(product.variant_groups[0].id);
    setSizesGroupId(product.variant_groups[1].id);
    
    const description = product.description.replace(/(<p>|<\/p>)/g, " ").split('  ');
    description[0] = description[0].substring(1);
    setDescription(description)
  }, [product])

  return (  
      <>
        <Button component={Link} to="/" size="large" type="button" color="none" style={{marginTop: '5%', marginLeft: '8%', fontSize: '30px', position: 'fixed', zIndex: 999, cursor: 'pointer', fontWeight: 'bold' }}>↩︎</Button>   
        <Container className={classes.root}>   
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h3" gutterBottom>{product.name}</Typography>
          
          <Grid container spacing={4}>
            <Grid item xs className={classes.grid}>
              <FormProvider {...methods}>
                <form className={classes.form} onSubmit={methods.handleSubmit((data) => onAddToCart({...data, productId: product.id, colorsGroupId, color, sizesGroupId, size, quantity}))}>
                  <InputLabel>Color:</InputLabel>
                  <Select className={classes.select} value={color} fullWidth onChange={(e) => setColor(e.target.value)} required>
                    {productColors.map((p_color) => (
                      <MenuItem key={p_color.id} value={p_color.id}>
                        {p_color.label}
                      </MenuItem>
                    ))}
                  </Select>

                  <InputLabel>Size:</InputLabel>
                  <Select className={classes.select} value={size} fullWidth onChange={(e) => setSize(e.target.value)} required>
                    {productSizes.map((p_size) => (
                      <MenuItem key={p_size.id} value={p_size.id}>
                        {p_size.label}
                      </MenuItem>
                    ))}
                  </Select>
                  
                  <InputLabel>Quantity:</InputLabel>
                  <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</Button>
                    <Typography>{quantity}</Typography>
                    <Button type="button" size="small" onClick={() => setQuantity(quantity + 1)}>+</Button>
                  </div>

                  <br />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button type="submit" variant="contained" color="primary">Add To Cart</Button>
                  </div>
                </form> 
              </FormProvider>
            </Grid>
            
            <Grid item xs={9} className={classes.grid}>
              <ImageList rowHeight={675} className={classes.imageList} cols={1}>
                <ImageListItem key="Subheader" cols={1} style={{ height: 'auto' }}>
                  <ListSubheader component="div">{description[1]}</ListSubheader>
                </ImageListItem>

                {product.assets.map((item) => (
                  <ImageListItem key={item.id} cols={item.cols || 1}>
                    <img src={item.url} alt="item.filename" />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>{description[2]}</span>}
                      actionIcon={
                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                          <Favorite />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList> 
              
              <br />
              <div dangerouslySetInnerHTML={{__html: description[3]}} />
            </Grid>
          </Grid>        
        </Container>
      </>
  )
}

export default ProductDetails
