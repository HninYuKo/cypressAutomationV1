describe ('API Key Requests', () => {

    const queryParam = {
        lat:33.44,
        lon:-94.04,
        appid:'b699de56f9e14121f2f3392f33acec53'
    };

    it ('API Key GET Call', () => { 
        cy.request({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather',
            qs: queryParam
        })
        .then((response) => {
            expect(response.status).to.eq(200);
        })

    })
})