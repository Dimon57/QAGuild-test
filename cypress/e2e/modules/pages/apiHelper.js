import {BaseApi} from "./baseApi";

 

export class ApiHelper extends BaseApi {

    HEADER (token) {
        return {
        "accept": "application/json",
        "Content-Type": "application/json",
        authorization: token
    }}

    bodyUserCreate = (data) => {
        return {
            "username": data.username,
            "password": data.password,
            "userStatus": 1
        }
    }

    createUser(data) {
       return this.post("login", this.bodyUserCreate(data), HEADER)
    }


    getDataUser(name){
        return this.get(`${name}`, HEADER)
    }


    updatedUser(data,name) {
        return this.put(`${name}`, this.bodyUserCreate(data), HEADER)
    }


    deleteUser(name){
        return this.delete(`${name}`, HEADER)
    }

    
}