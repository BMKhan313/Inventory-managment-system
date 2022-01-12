import axios from 'axios'

const url = 'http://localhost:8000'

export const createItem = async (item) =>{
    try{
    const res = await axios.post(`${url}/createItem`,item)
    
    }catch(err){
     console.log("error while adding items", err);
    }
}

export const getItems = async(params) =>{
    try {
        //extract from param
        

        console.log('hello params',params)
        let res = await axios.get(`${url}/getItems/${params}`);   //or
        // let res = await axios.get(`${url}/getItems${param}`);
        // console.log(res.data)
        return res.data;
    
      } catch (err) {
        console.log("error while calling getAllItems api", err);
      }
  }