import ProductModel from "./models/products.models.js";


export default class Cart{
    get = async () => await ProductModel.find();
    create = async (data) => await ProductModel.create(data);
    getByID = async (id) => await ProductModel.findById (id);
    update = async (id,data) => await ProductModel.updateOne({_id: id}, data )


}

