export class BaseApi {
    structureApi(method, endpoint, body, headers) {
        return cy.request({
            method: method,
            url: "http://localhost:8087/" + endpoint,
            headers: headers,
            failOnStatusCode: false,
            body: body,
        })
    }

    post(endpoint, body, headers) {
        return this.structureApi("POST", endpoint, body, headers)
    }

    get(endpoint, headers) {
        return this.structureApi("GET", endpoint, null, headers)
    }

    put(endpoint, body, headers) {
        return this.structureApi("PUT", endpoint, body, headers)
    }

    delete(endpoint, headers) {
        return this.structureApi("DELETE", endpoint, null, headers)
    }
}