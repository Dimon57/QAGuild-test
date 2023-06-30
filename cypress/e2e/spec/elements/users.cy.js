import { UsersPage, SELECTORS } from "../../modules/pages/users.page";

const users = new UsersPage

describe('Users', () => {

    const USER_DATA = {
        userName: 'Dmytro',
        name: 'Dimon',
        email: 'dmitrijcernenko@gmail.com',
        roleAdmin: 'ROLE_ADMIN',
        password: '123456',
        roleUser: 'ROLE_USER',
        firstUserName: 'Vlad',
        firstName: 'Oleh',
        firstEmail: 'vladolehthebest@gmail.com',
        newPassword: '654321',
        errorCount: " Validation failed for object='signUpRequest'. Error count: 7 ",
        error: 'JSON parse error'
    }

  beforeEach('',() => { 
      users.loginByAPI() 
      users.goto('user-management')
  })

  it('Adding an "Admin" to the table', () => {
    users.clickAddUserBTN()

    users.fillAllFild(USER_DATA.email, USER_DATA.password, USER_DATA.userName, USER_DATA.name)
    users.clickAdminBTN()
    users.clickUserBTN()
    
    users.getDataExists(USER_DATA.userName, USER_DATA.name, USER_DATA.email, USER_DATA.roleAdmin);
  })

  it('Adding an "User" to the table', () => {
    users.clickAddUserBTN()

    users.fillAllFild(USER_DATA.firstEmail, USER_DATA.newPassword, USER_DATA.firstUserName, USER_DATA.firstName)
    users.clickUsersBTN()
    users.clickUserBTN()

    users.getDataExists(USER_DATA.firstName,USER_DATA.firstUserName,  USER_DATA.firstEmail, USER_DATA.roleUser)
  })

  it('Filling only the "Email" field', () => {
    users.clickAddUserBTN()
    users.getElement(SELECTORS.email).type(USER_DATA.email)
    users.clickUserBTN()

    users.getElement(SELECTORS.error).should('include.text', USER_DATA.error)
  })

  it('Filling only the "Admin" field', () => {
    users.clickAddUserBTN()
    users.clickAdminBTN()

    users.clickUserBTN()

    users.getElement(SELECTORS.error).should('have.text', USER_DATA.errorCount)
  })

})