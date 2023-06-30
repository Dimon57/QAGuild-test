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
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaXNBZG1pbiI6dHJ1ZSwibmFtZSI6ImFkbWluIiwiaWF0IjoxNjg4MDQ5ODkxLCJleHAiOjE2ODg2NTQ2OTF9.nmpLzvwUeM5dZE74Fy24AqRTjkPZqK46At3gzEpDvsAXtfv1v-Tlk1x_VbNpGbmqblogNEfmoucc8--q_rBp0Q'
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