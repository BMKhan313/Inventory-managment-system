
import  Mongoose  from "mongoose";

const connection = async() => {
    const url = 'mongodb+srv://office:talhakhan@cluster0.delbl.mongodb.net/mernproject?retryWrites=true&w=majority'
  
   try{
    await Mongoose.connect(url,
        { 
            UseNewUrlParser: true, 
            useUnifiedTopology: true,
            // useFindAndModify: false
          }
         )
         console.log("db conected successfully")
   }catch(err){
     console.log("error while connecting to mongodb",err);
   }
   
    
}
export default connection