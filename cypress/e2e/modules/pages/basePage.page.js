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
        Headers: {
            authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaXNBZG1pbiI6dHJ1ZSwibmFtZSI6ImFkbWluIiwiaWF0IjoxNjg4MDQwODE4LCJleHAiOjE2ODg2NDU2MTh9.lae5VjhqPR5E9hAFKPVcpgWl8PTO-UY9VV39Dk97H9-q9KDc25XDbJaZkqosIeZs-JY-nqDjsfcAeL7J1Fu84g'
        },
        url: 'http://localhost:8087/api/gateway/auth/signin',
        body: {
            usernameOrEmail: "admin",
            password: "123456",
    }
  })
    .then((req) => {
        window.localStorage.setItem('access_token',  req.body.accessToken)
        cy.log(req.body.accessToken)
  })
}


}