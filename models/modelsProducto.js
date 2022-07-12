import mongoose from 'mongoose';
const {Schema} = mongoose

const schemaProductos = new Schema({
	title:{type:String,required:true},
	thumbnail:{type:String,required:true},
	price:{type:Number,required:true},
})


export default mongoose.model('producto',schemaProductos);
