import CartModel from "./models/carts.models.js";


export default class Cart{
    get = async () => await CartModel.find();
    create = async (data) => await CartModel.create(data);
    getByID = async (id) => await CartModel.findById (id);
    update = async (id,data) => await CartModel.updateOne({_id: id}, data )


}

