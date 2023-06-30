import {BaseApi} from "./baseApi";

export class ApiHelper extends BaseApi {

    HEADER (token) {
        return {
        "accept": "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
    }}

    bodyUserCreate = (data) => {
        return {
            "username": data.username,
            "password": data.password,
            "userStatus": 1
        }
    }

    createUser(data, token) {
       return this.post("api/episodes", this.bodyUserCreate(data),this.HEADER(token))
    }


    getDataUser(name, token){
        return this.get(`${name}`, this.HEADER(token))
    }


    updatedUser(data,name, token) {
        return this.put(`${name}`, this.bodyUserCreate(data), this.HEADER(token))
    }


    deleteUser(name, token){
        return this.delete(`${name}`, this.HEADER(token))
    }

    
}