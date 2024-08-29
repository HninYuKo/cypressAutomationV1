import 'cypress-iframe'

describe ('Mouse Operation', () => {

    it ("Mouse Over Test", () => { 

        cy.visit("https://demo.opencart.com/demo/");
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('not.be.visible');
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").click();
        cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should('be.visible');

    })

    it.only(("Double Click Test"),() => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3",{failOnStatusCode: false});
        cy.wait(30000);
        cy.frameLoaded("#iframeResult");

        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#field2").should("be.visible");

    })

    it.skip(("scroll to View Test"),() => {

        cy.visit("https://www.countries-ofthe-world.com/all-countries.html",{failOnStatusCode: false});

        cy.wait(30000);

        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").scrollIntoView({duration:2000});

    })




})