import { BasePage } from "./basePage.page";

export const SELECTORS = {
    username:'#usernameOrEmail',
    password:'#password',
    loginBTN:'[class="btn btn-primary"]',
    error:'[class="errors"]',
    searchTerm:'[class="container-fluid"]' 
}

export class LoginPage extends BasePage{
    getUserName(name){
        this.getElement(SELECTORS.username).type(name) 
    }

    getPassword(password){
        this.getElement(SELECTORS.password).type(password)
    }

    clickLoginBTN(){
        this.getElement(SELECTORS.loginBTN).click()
    }

    getWrongUserName(wrongName){
        this.getElement(SELECTORS.username).type(wrongName)
    }

    getWrongPassword(wrongPassword){
        this.getElement(SELECTORS.password).type(wrongPassword)
    }
}