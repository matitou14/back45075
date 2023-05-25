import UserModel from "./models/users.models.js"


export default class User{
    get = async () => await UserModel.find();
    create = async (data) => await UserModel.create(data);
    getByID = async (id) => await UserModelfindById (id);
    update = async (id,data) => await UserModel.updateOne(id,data);

}

