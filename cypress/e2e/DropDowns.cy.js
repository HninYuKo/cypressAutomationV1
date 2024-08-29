

describe ('Dynamic DropDown', () => {


    it.skip("Dynamic DropDown test1", () => {

    cy.visit("https://www.wikipedia.org/")

    cy.get("#searchInput").type("Delhi")
    cy.get(".suggestion-title").contains("Delhi University").click()

    })


    it("auto suggest DropDown test2", () => {

        cy.visit("https://www.google.com")
        cy.get("textarea[name='q']").type('cypress automation')

        cy.wait(3000)

        cy.get("div.wM6W7d>span").should('have.length.at.least',11)

        cy.get("div.wM6W7d>span").each( ($el, $index, $list) => {

            if($el.text() == "cypress automation tutorial") {

                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')
    })

})