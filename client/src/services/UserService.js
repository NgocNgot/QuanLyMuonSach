import createApiClient from "./api.service";
class UserService {
    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }

    async findAll() {
        return (await this.api.get("/")).data;
    }
    async createUser(data) {
        return (await this.api.post("/create", data)).data;
    }
    async findOne(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async updateUser(id, data) {
        return (await this.api.put(`/update/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/delete/${id}`)).data;
    }
    async login(data) {
        return (await this.api.post("/login", data)).data;
    }
    async checkAccount(email) {
        return (await this.api.post("/checkAccount", { email })).data;
    }

}
export default new UserService();