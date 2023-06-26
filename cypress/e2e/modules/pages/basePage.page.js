
export class BasePage{
    
    goto(page){
        cy.visit('http://localhost:8087/'+ page)
    }
    getElement(element){
        return cy.get(element)
}
    loginByAPI(){
        cy.request({
        method: 'POST',
        url: 'http://localhost:8087/api/gateway/auth/signin',
        body: {
            usernameOrEmail: "admin",
            password: "123456",
    }
  })
    .then((req) => {
        window.localStorage.setItem('access_token',  req.body.accessToken)
  })
}

}