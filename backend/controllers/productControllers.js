import Product from "../models/productSchema";

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).JSON({
        product
    });
};

