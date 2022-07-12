import express from 'express'
import mongoose from 'mongoose'
import routerProducto from './routers/routerProducto.js'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


mongoose.connect('mongodb://localhost/ecommerce')
.then(e=>{
	console.log('todo creado')
}).catch(e=>{
	console.log('todo mal')
})

app.use('/productos',routerProducto)





app.listen(8080,()=>{
	console.log('todo oki')
})