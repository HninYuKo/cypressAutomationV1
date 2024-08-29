describe ('Atom Login', () => {
    before ("Login ", () => {

        cy.visit("https://broadband.atom.com.mm/frontend-login");
        cy.wait(3000);
        // cy.get("#phone").type('976337904',{force: true});
        // cy.get("#password").type('Atom01109',{force: true});
        cy.get("#phone").type('976337904');
        cy.get("#password").type('Atom01109');
 
        cy.get("button[type='submit']").click();
     
    })

    it("test 1 ", () => {
     

        cy.get(".content-title").contains("Subscription List") //Assertion

    })


    it.skip("XPath_Test2", () => {
        cy.visit("https://broadband.atom.com.mm/login")

      

        cy.xpath("//input[@name='phone']").type('976337904')
        
        cy.xpath("//input[@id='password']").type('Atom01109')

        cy.get(".gradient-rounded-btn.pull-left").click()

        cy.get(".content-title").contains("Subscription List") //Assertion

    })

   
})