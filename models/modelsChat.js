import mongoose from 'mongoose';

const schemaChat = new mongoose.schema({
	id:mongoose.ObjectId,
	email:String,
	mensaje:String,
	fecha:{type:Date, default: Date.now}
})


module.exports = mongoose.models('Chat',schemaChat);
