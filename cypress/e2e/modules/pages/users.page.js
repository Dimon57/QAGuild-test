import { BasePage } from "./basePage.page";

export const SELECTORS = {
    addUserBTN: '[class="btn btn-warning mb-2"]',
    email: '#email',
    password: '#password',
    userName: '#username',
    name: '#name',
    user: '#roleName',
    admin: '#roleName2',
    userBTN: '#add-button',
    error: '[class="invalid-feedback"]'
}

export class UsersPage extends BasePage{
    clickAddUserBTN(){
        this.getElement(SELECTORS.addUserBTN).click()
    }

    fillAllFild( email, password, username, name ){
        this.getElement(SELECTORS.email).type(email)
        this.getElement(SELECTORS.password).clear().type(password)
        this.getElement(SELECTORS.userName).clear().type(username)
        this.getElement(SELECTORS.name).type(name)
    }
        
    clickAdminBTN(){
        this.getElement(SELECTORS.admin).click({ force: true })
    }
    
    clickUserBTN(){
        this.getElement(SELECTORS.userBTN).click()
    }

    clickUsersBTN(){
        this.getElement(SELECTORS.user).click({ force: true })
    }

    getDataExists(userName,...dataTest){
        
        cy.contains(userName).parent().within(() => {
            dataTest.forEach((data, index) => {
                this.getElement('td').eq(index +2).should('have.text', data)
    
            })
        })
    }   
}