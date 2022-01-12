import Item from '../schema/userSchema1.js'
// console.log("itemcontroller")


export const createItem = async(req,res)=>{
   // console.log(req.body);
   const { itemId, itemName,sRate,pRate,description,quantity,category } = req.body;
   if (!itemName || !description || !sRate || !category || !quantity ) {
      console.log("fill out all fields")
      return res.status(400).json({ message: "Please fill out all the fields" });
  }
   try {
      const createdItem = await new Item(req.body);
      createdItem.save();
      res.status(201).json("item saved successfully")
      
   } catch (error) {
      res.status(500).json(error)
   }
}

export const getItems = async(req,res)=>{
  
  try {
   let AllItems = await Item.find({}); 
   console.log(AllItems)
   res.status(200).json(AllItems);
  } catch (error) {
     res.status(500).json(error)
  }
}

