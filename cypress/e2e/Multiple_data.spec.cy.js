/// <reference types="cypress" />
import Create_product from "../../pages/Create_product"

describe('multiple product creation', () => {

before(()=>{
    cy.visit('https://coral-app-mrcm3.ondigitalocean.app/app/login')
            cy.get('[name="email"]').type(Cypress.env('CYPRESS_EMAIL'));
            cy.get('[name="password"]').type(Cypress.env('CYPRESS_PASSWORD'));
            cy.get('[type="submit"]').click();
    
})

it('create multiple products', () => {
    cy.fixture('multiFile').as('productDetails'); 
     cy.get('@productDetails').then((details)=>{
        details.forEach((product, index)=>{       
            Create_product.gotoProduct_section()
            Create_product.enterProduct_details(product.Product_name, product.Product_description) 
            Create_product.publishProducts(product.Product_name)
        })
    
})


})

})