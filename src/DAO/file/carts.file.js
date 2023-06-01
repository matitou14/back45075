import FileManager from "./fileManager";

export default class Cart {
    constructor() {
        this.file = new FileManager('./db/carts.json')
    }

    get = async () => await this.FileManager.get();
    create = async (data) => await this.FileManager.add(data);
    getByID = async (id) => await this.FileManager.getOneByParam ("id", id);
    update = async (id,data) => await this.FileManager.update(id,data);


}