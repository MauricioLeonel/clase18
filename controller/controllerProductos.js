import modelsProducto from '../models/modelsProducto.js'

const obtengoProducto = async (req,res)=>{
	const {name} = req.params
	const result = await modelsProducto.find({title:name,price:{$lt:1000}})
	const result2 = await modelsProducto.find({title:name,price:{$gt:1000,$lt:3000}})
	const result3 = await modelsProducto.find({title:name,price:{$gt:3000}})
	const result4 = await modelsProducto.find({title:name}).sort({price:1})


	res.json({result,result2,result3,result4:result4[2]})
}

const agregarProductos = async (req,res)=>{
	const {title,price,thumbnail} = req.body
	const producto = new modelsProducto({
		title:title,
		price:price,
		thumbnail:thumbnail
	}) 

	await producto.save()
	res.send('guardaaaado PAAA')
}

const actualizaProductosAll = async (req,res)=>{
	//agregamos a todos el stock 100
	await modelsProducto.updateMany({},[
			{
				$set:{stock:100}
			}
		]
	)
	//actualizamos el stock a 0 cuando son mayor que 4000
	await modelsProducto.updateMany({price:{$gt:4000}},[
			{
				$set:{stock:0}
			}
		]
	)
	res.send('todo ok')
}

const borrarProducto = async(req,res)=>{
	await modelsProducto.deleteMany({price:{$lt:1000}})
	res.send('oki')
}

export {obtengoProducto,agregarProductos,actualizaProductosAll,borrarProducto}

