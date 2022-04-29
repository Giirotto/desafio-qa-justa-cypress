beforeEach('entrar na pagina', () => {
    cy.visit('http://automationpractice.com')
})

describe('test-case', ()=>{
    it('delivery address', ()=>{
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name').click()
        
        cy.get('h1').should('have.text', 'Faded Short Sleeve T-shirts')
        cy.get('#add_to_cart > .exclusive').click()
        cy.get('.button-medium > span').click()

        //sumary
        cy.get('.cart_navigation > .button > span').click()

        //Sign in
        var login = {
            email: 'candidato@justa.com.vc',
            password: 'tamojusto'
        }

        cy.get('#login_form > .page-subheading').should('have.text', 'Already registered?')
        cy.get('#email').type(login.email)
        cy.get('#passwd').type(login.password)
        cy.get('#SubmitLogin > span').click()
    })
})