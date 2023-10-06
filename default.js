import Product from './model/product-schema.js'
import { products } from './constant/data.js'

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log("Inserted is the very");
    } catch (error) {
        console.log("dataInserted", error.message)
    }

}

export default DefaultData