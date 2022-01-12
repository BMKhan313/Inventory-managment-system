import Mongoose from 'mongoose'
// import autoIncrement from 'mongoose-auto-increment'

const itemShema = new Mongoose.Schema({
    itemId:{
        type: Number,
        required: true,
        unique: true
    },
    itemName:{
      type: String,
      required: true
    },
    pRate:{
       type: Number,
       required: true
    },
    sRate:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        requiured: true
    },
    description:{
      type: String,
    //   required: true,
    },
    
    category:{
      type: String,
      required: true,
    },
    createdDate:{
        type: Date
    }
})

// autoIncrement.initialize(Mongoose.connection);
// itemShema.plugin(autoIncrement.plugin, {
//   model: 'item',
//   field: 'itemId',
//   startAt: 1,
//   incrementBy: 1

// })
const item = Mongoose.model('item',itemShema);
export default item