import {ApiHelper} from "../../../modules/pages/apiHelper";


const apiHelper = new ApiHelper()

const DATA = {
    username: "admin",
    password: "123456",
}

describe('Api test', () => {
    
    it('', () => { 
        apiHelper.createUser(DATA).then((data) => {
            expect(data.status).to.eq(200)
            expect(data.body.code).to.eq(200)
            expect(data.body.type).to.eq("unknown")
        })
    })
})    