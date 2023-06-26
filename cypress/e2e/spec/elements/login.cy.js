import {  LoginPage, SELECTORS} from "../../modules/pages/loginPage"
const login = new LoginPage

describe('Login', () => {

      const USER_DATA = {
        name:'admin',
        password:'123456',
        wrongName:'Dimon',
        wrongPassword:'654321'
    } 

    beforeEach('',() => { 
        login.goto('login')
    })

    it('Fill in the "Login" form ', () => {
        login.getUserName(USER_DATA.name)
        login.getPassword(USER_DATA.password)
        login.clickLoginBTN()

        login.getElement(SELECTORS.searchTerm).should('have.text', 'Add episode')
    })  

    it('Fill in the credentials incorrectly',()=>{
        login.getWrongUserName(USER_DATA.wrongName)
        login.getWrongPassword(USER_DATA.wrongPassword)
        login.clickLoginBTN()

        login.getElement(SELECTORS.error).should('have.text', ' Bad credentials ')
    }) 
})