import {
    visit,
    buyProduct,
    signIn,
    deliveryData,
    shipping,
    paymentBank,
    updateBilling,
    updateAddress,
    referenceAddressY,
    referenceAddressX,
    checkoutAddress,
    paymentCheck
} from "../support/pages"

beforeEach('enter page', () => {
    visit();
})

describe('delivery address', () => {
    it('delivery address', () => {
        buyProduct();
        signIn();
        updateAddress();
        deliveryData();
        referenceAddressY();
        shipping();
        paymentBank();
    })
})

describe('test billing', () => {
    it('billing address', () => {
        buyProduct();
        signIn();
        updateBilling();
        deliveryData();
        referenceAddressX();
        shipping();
        paymentBank();
    })
})

describe('payment by check', () => {
    it('payment by check', () => {
        buyProduct();
        signIn();
        checkoutAddress();
        shipping();
        paymentCheck();
    })
})