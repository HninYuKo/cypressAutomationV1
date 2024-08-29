//POST https://gorest.co.in/public/v2/users
//PUT https://gorest.co.in/public/v2/users/${userId}
//DELETE https://gorest.co.in/public/v2/users/${userId}


describe ('Go Rest API Chaining', () => {

    const auth_token='Bearer 19476d09b74e6ec95969835c281381e6d1f0cbdf0448c9830027ef9df5732b4b';

    it ('Query Param Test', () => { 
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                name: 'John Kenedy',
                gender:'Male',
                email: Math.random().toString(5).substring(2)+'@gmail.com',
                status:'active'
            },
            headers:{
                Authorization: auth_token
            }
        })
        .then( (response) => { 
                expect(response.status).to.eq(201);
                const userId= response.body.id;
                //update user name
                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    body: {
                        name: 'Scott'
                    },
                    headers:{
                        Authorization: auth_token
                    }
                })
                .then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body.name).to.equal('Scott') 
                    //delete resource
                    cy.request({
                        method: 'DELETE',
                        url: `https://gorest.co.in/public/v2/users/${userId}`,
                        headers: {
                            Authorization: auth_token
                        }
                    })
                    .then((response) => {
                        expect(response.status).to.equal(204)
                    })
                })

        })

    })

})