import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {getItems} from '../services/api.js'

const ItemsList = ({match}) => {
  const history = useHistory()
  const myParams = useParams()
 const [items, setItems] = useState({})

  const fetchItems = async () => {
     
    let data = await getItems(match.params.id);
    console.log("my detailviewdata",data);
    setItems(data);
  }
useEffect(() => {
  fetchItems();
}, [])

    return (
        <div>
          <h2>Items list</h2> 
          {/* <Button variant='contained' onClick={()=>fetchItems()}>SHow me All the Record</Button>  */}
        </div>
    )
}

export default ItemsList
