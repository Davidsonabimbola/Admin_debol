/// <reference types="cypress" />
import Create_product from "../../pages/Create_product"
import Create_collection from "../../pages/Create_collection"


describe('template spec', () => {
  // beforeEach(()=>{
  //   cy.fixture('productFile').as('details')
  //   cy.visit('https://coral-app-mrcm3.ondigitalocean.app/app/login')

  //    cy.get('@details').then((details) => {
  //     cy.get('[name="email"]').type(details.email);
  //     cy.get('[name="password"]').type(details.password);
  //     cy.get('[type="submit"]').click();
  //   });
  // })
  beforeEach(()=>{
    cy.visit('https://coral-app-mrcm3.ondigitalocean.app/app/login')
      cy.get('[name="email"]').type(Cypress.env('CYPRESS_EMAIL'));
      cy.get('[name="password"]').type(Cypress.env('CYPRESS_PASSWORD'));
      cy.get('[type="submit"]').click();
  })


  it.only('add new product', () => {  
    cy.fixture('productFile').as('details')    
    cy.get('@details').then((details) => {
      Create_product.gotoProduct_section() // GO TO PRODUCT SECTION
      Create_product.enterProduct_details(details.Product_name, details.Product_description) //ENTER PRODUCT DETAILS
      Create_product.publishProducts(details.Product_name)  //  PUBLISH PRODUCTS 
      })
       
  })

  it('check duplicate product', () => {
    var Product_name = 'cheeks'
    var Product_description = 'A very good snack'   
    Create_product.gotoProduct_section() // GO TO PRODUCT SECTION 
    Create_product.enterProduct_details(Product_name, Product_description) //ENTER  DUPLICATE PRODUCT DETAILS   
    Create_product.duplicate_publishProducts(Product_name) //  PUBLISH   DUPLICATE PRODUCTS
       
  })


  it('add new collection',()=>{
    var collectionName = 'bluedrinks'
    Create_collection.gotoCollection_section()  // GO TO PRODUCT SECTION
   Create_collection.enterCollection_details(collectionName) //  PUBLISH PRODUCTS
   Create_collection.publishCollection(collectionName) //  PUBLISH PRODUCTS
  })

  it('check duplicate collection',()=>{
    var collectionName = 'bluedrinks'
    Create_collection.gotoCollection_section() // GO TO PRODUCT SECTION  
    Create_collection.enterCollection_details(collectionName) //ENTER  DUPLICATE COLLECTION DETAILS  
    Create_collection.duplicate_publishCollection(collectionName) //  PUBLISH DUPLICATE COLLECTION
  })
  
})

