import data from '../support/dados';

export const visit = () => {
    cy.visit(data.visit.url)
};

export const buyProduct = () => {
    cy.get(data.buyProduct.selectProduct).click()
    cy.get(data.buyProduct.validProduct).should('have.text', 'Faded Short Sleeve T-shirts')
    cy.get(data.buyProduct.addToCart).click()
    cy.wait(5000)
    cy.get(data.buyProduct.proceedCheckout).click()
    cy.wait(1000)
    cy.get(data.buyProduct.proceedSummary).click()
}

export const signIn = () => {
    cy.get(data.signIn.validLogin).should('have.text', 'Authentication')

    cy.get(data.signIn.email).type('candidato@justa.com.vc')
    cy.get(data.signIn.password).type('tamojusto')
    cy.get(data.signIn.proceedLogin).click()
}

export const checkoutAddress = ()=>{
    cy.get(data.deliveryData.proceedAddress).click()
}

export const updateAddress = () => {
    cy.get(data.deliveryData.validAddress).should('have.text', 'Addresses')
    cy.get(data.deliveryData.updateDeliveryAddress).click()
}

export const updateBilling = () => {
    cy.get(data.deliveryData.validAddress).should('have.text', 'Addresses')
    cy.get(data.deliveryData.updateBillingAddress).click()    
}

export const deliveryData = () => {

    cy.get(data.deliveryData.firstName).clear()
    cy.get(data.deliveryData.firstName).type('Raffael')

    cy.get(data.deliveryData.lastName).clear()
    cy.get(data.deliveryData.lastName).type('Girotto')

    cy.get(data.deliveryData.company).clear()
    cy.get(data.deliveryData.company).type('casa')

    cy.get(data.deliveryData.address).clear()
    cy.get(data.deliveryData.address).type('Av. Luiz Imparato')

    cy.get(data.deliveryData.number).clear()
    cy.get(data.deliveryData.number).type('501')

    cy.get(data.deliveryData.city).clear()
    cy.get(data.deliveryData.city).type('São Paulo')

    cy.get(data.deliveryData.state).select('43')

    cy.get(data.deliveryData.postalCode).clear()
    cy.get(data.deliveryData.postalCode).type('12015')

    cy.get(data.deliveryData.homePhone).clear()
    cy.get(data.deliveryData.homePhone).type('1122226666')

    cy.get(data.deliveryData.mobilePhone).clear()
    cy.get(data.deliveryData.mobilePhone).type('11988885555')

    cy.get(data.deliveryData.reference).clear()
    
}

export const shipping = () => {
    cy.get(data.shipping.validShipping).should('have.text', 'Shipping')
    cy.get(data.shipping.checkbox).check()
    cy.get(data.shipping.proceedShipping).click()
}

export const referenceAddressX = () => {
    cy.get(data.deliveryData.reference).type('Alphaville')

    cy.get(data.deliveryData.saveData).click()
    cy.wait(5000)

    cy.get(data.deliveryData.proceedAddress).click()
}

export const referenceAddressY = () => {
    cy.get(data.deliveryData.reference).type('xx')

    cy.get(data.deliveryData.saveData).click()
    cy.wait(5000)

    cy.get(data.deliveryData.proceedAddress).click()
}
export const paymentBank = () => {
    cy.get(data.paymentBank.validPayment).should('have.text', 'Please choose your payment method')
    cy.get(data.paymentBank.bankWire).click()

    cy.get(data.paymentBank.confirm).click()

    cy.get(data.paymentBank.validConfirm).should('have.text', 'Order confirmation')
}

export const paymentCheck = ()=>{
    cy.get(data.paymentCheck.validPayment).should('have.text','Please choose your payment method')
    cy.get(data.paymentCheck.check).click()
    cy.get(data.paymentCheck.confirm).click()
    cy.get(data.paymentBank.validConfirm).should('have.text', 'Order confirmation')
}