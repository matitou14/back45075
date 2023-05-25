import FileManager from "./fileManager";

export default class User {
    constructor() {
        this.file = new FileManager('./src/db/users.json')
    }

    get = async () => await this.FileManager.get();
    create = async (data) => await this.FileManager.add(data);
    getByID = async (id) => await this.FileManager.getOneByParam ("id", id);
    update = async (id,data) => await this.FileManager.update(id,data);


}