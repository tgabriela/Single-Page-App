const db = require("../config/firebase")

const getAllProducts = async (req, res) => {
    try {
        let products = []
        await db.collection("products").get().then((querySnapshot) => {
            let product
            querySnapshot.forEach((doc) => {
                product = doc.data()
                product.id = doc.id
                products.push(product)
            })
        })
        res.status(200).json({ success: "success", products: products })
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
};


const getProductById = async (req, res) => {
    try {
        let id = req.params.id 
        let product = await db.collection("products").doc(id).get() 
        let _product = product.data() 
        _product.id = id 
        res.status(200).json({ message: "Product retrieved", product: _product }) 
    } catch (e) {
        res.json({ message: e.message, status: 500 }) 
    }
};


const addProduct = async (req, res) => {
    try {
        let product = JSON.parse(req.params.product)
        await db.collection('products').add(product)
        res.status(200).send("Product added successfully")
    } catch (e) {
        res.json({ response: e.message, status: 500 })
    }
}


const updateProduct = async (req, res) => {
    try {
        const product = JSON.parse(req.params.id) 
        await db.collection("products").doc(product.id).update(product) 
        res.status(200).send("Product updated successfully")
    } catch (e) {
        res.json({ response: e.message, status: 500 })
    }
}


const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        await db.collection('products').doc(id).delete()
        res.status(200).send("Product successfully deleted")
    } catch (e) {
        res.json({ response: e.message, status: 500 })
    }
}

module.exports = {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct}



