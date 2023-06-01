import FileManager from "./fileManager";

export default class Product {
    constructor() {
        this.file = new FileManager('./db/products.json')
    }

    get = async () => await this.FileManager.get();
    create = async (data) => await this.FileManager.add(data);
    getByID = async (id) => await this.FileManager.getOneByParam ("id", id);
    update = async (id,data) => await this.FileManager.update(id,data);


}