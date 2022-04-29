const data = {
    visit: {
        url: 'http://automationpractice.com'
    },

    buyProduct: {
        selectProduct: "#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name",
        validProduct: 'h1',
        addToCart: '#add_to_cart > .exclusive',
        proceedCheckout: '.button-medium > span',
        proceedSummary: '.cart_navigation > .button > span'
    },

    signIn: {
        validLogin: '.page-heading',
        email: '#email',
        password: '#passwd',
        proceedLogin: '#SubmitLogin > span'
    },

    deliveryData:{
        validAddress: '.page-heading',
        updateDeliveryAddress: '#address_delivery > .address_update > .button > span',
        updateBillingAddress: '#address_invoice > .address_update > .button > span',
        firstName: '#firstname',
        lastName: '#lastname',
        company: '#company',
        address: '#address1',
        number: '#address2',
        city: '#city',
        state: '#id_state',
        postalCode: '#postcode',
        homePhone: '#phone',
        mobilePhone: '#phone_mobile',
        reference: '#alias',
        saveData: '#submitAddress > span',
        proceedAddress: '.cart_navigation > .button > span'
    },

    

    shipping:{
        validShipping: '.page-heading',
        checkbox: '#cgv',
        proceedShipping: '.cart_navigation > .button > span'
    },

    paymentBank:{
        validPayment: '.page-heading',
        bankWire: '.bankwire',
        confirm: '#cart_navigation > .button > span',
        validConfirm: '.page-heading'
    },

    paymentCheck:{
        validPayment: '.page-heading',
        check: '.cheque',
        confirm: '#cart_navigation > .button > span',
        
    }
}

export default data