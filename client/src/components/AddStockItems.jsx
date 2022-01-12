import { Box, makeStyles, item, TextField, Typography, Button, FormControl,InputLabel } from '@material-ui/core'
import React,{useState} from 'react'
import { createItem } from '../services/api.js'

const useStyles = makeStyles({
  itemField: {
    border: '4px solid black',
     padding: '1rem',
    margin: '2rem'
  },
  textField: {
    // width: '8rem',
    // flex: 1,
    // margin: 5
    marginTop: 5,
    marginBottom: 5
  },
  form: {
    display: 'grid',
    // flexDirection: 'row',
    gridTemplateColumns: 'auto auto auto ',
    gridRowGap: '0%',
    backgroundColor: '#00ff66',
    // display: 'grid',
    margin: 5,
    // justifyContent: 'left',
    // alignItem: 'center',
  }
})

const initialValue = {
  itemId: '',
  itemName: '',
  pRate: '' ,
  sRate: '',
  quantity: '',
  description: '',
  category: '',
  createdDate: new Date()
}
const AddStockItems = () => {
  const classes = useStyles()
  const [item, setItem] = useState(initialValue);

  const handleChange = (e) =>{
    e.preventDefault();
    setItem({...item, [e.target.name]: e.target.value })
   }
 
   const saveItem = async() =>{
    await createItem(item);
   }

  return (
    <Box>
      <Typography variant="h3">Add Stock</Typography>
      <Box className={classes.itemField} >
        <FormControl className={classes.form}>
          <TextField className={classes.textField}
          
            label="itemId" variant="outlined" 
            name="itemId"
            
            value ={item.itemId}
            // defaultValue = {{value}}
            onChange={(e)=>handleChange(e)} 
            
            /><br/>
          <TextField className={classes.textField}
            label="itemName" variant="outlined" 
            name="itemName"
            
            value= {item.itemName}
            onChange={(e)=>handleChange(e)}
            
            />
          <TextField className={classes.textField}
            label="pRate" variant="outlined" 
            name="pRate"
            value= {item.pRate}
            onChange={(e)=>handleChange(e)}
            
           />
          <TextField className={classes.textField}
            label="sRate" variant="outlined" 
            name="sRate"
           
            value= {item.sRate}
            onChange={(e)=>handleChange(e)}
           
            />
          <TextField className={classes.textField}
            label="quantity" variant="outlined"
            name="quantity"
            value= {item.quantity}
            onChange={(e)=>handleChange(e)} 
            
            />
          <TextField className={classes.textField}
            label="description" variant="outlined" 
            name="description"
            value= {item.description}
            onChange={(e)=>handleChange(e)}
            
            />
          <TextField className={classes.textField}
            label="category" variant="outlined" 
            name="category"
            value= {item.category}
            onChange={(e)=>handleChange(e)}
           
            />
          {/* <TextField className={classes.textField}
            label="createdDate" variant="outlined" 
            name="createdDate"
            value= {item.createdDate}
            onChange={(e)=>handleChange(e)}
            
            /> */}
        <Button 
        className={classes.textField}
        variant="contained" color="primary"
        onClick= {()=>saveItem()}
        >Add Item</Button>
        </FormControl>
      </Box>
    </Box>
  )
}

export default AddStockItems
