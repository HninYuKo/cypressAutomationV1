describe ('HTTP Requests', () => {

    it ('Get Call', () => { 
        cy.request('GET', 'https://dummy.restapiexample.com/api/v1/employees')
        .its('status')
        .should('equal', 200);

    })

    it.skip ('Post Call', () => { 
        cy.request(
            {
                method: 'POST',
                url: '	https://dummy.restapiexample.com/api/v1/create',
                body: {
                    name:"test",
                    salary:"123",
                    age:"23"
                }
            })
        .its('status')
        .should('equal', 201);

    })

    it ('Put Call', () => { 
        cy.request(
            {
                method: 'PUT',
                url: 'https://dummy.restapiexample.com/api/v1/update/21',
                body: {
                    name:"test",
                    salary:"123",
                    age:"23"
                }
            })
        .its('status')
        .should('equal', 200);

    })

    it ('Delete Call', () => { 
        cy.request(
            {
                method: 'DELETE',
                url: '	https://dummy.restapiexample.com/api/v1/delete/2',
            })
        .its('status')
        .should('equal', 200);

    })

})