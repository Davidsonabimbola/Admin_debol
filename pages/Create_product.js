class calls{

    gotoProduct_section(){ 
        cy.get('[class="Collapsible"]').then((navbar)=>{
            cy.wrap(navbar).contains('Products').click()
           })
          cy.get('[class="large:px-xlarge py-xlarge bg-grey-5 min-h-content overflow-y-auto"]').should('be.visible') //assertion
          cy.get('[class="flex space-x-2"]').then((navButton)=>{
            cy.wrap(navButton).find('[class="btn btn-secondary btn-small"]').contains('New Product').click() // select New-Product Button
          })
    }

    enterProduct_details(Product_name, Product_description){
        var Product_Namefield = cy.get('[name="general.title"]') // name field
    Product_Namefield.type(Product_name)
    var product_Descriptionfield = cy.get('[placeholder="A warm and cozy jacket..."]') // product description field
    product_Descriptionfield.type(Product_description)
    }

    publishProducts(Product_name){
        cy.get('[class="gap-x-small flex"]').then((Publish_button)=>{
            cy.wrap(Publish_button).find('[class="btn btn-primary btn-small"]').click({force:true}) //Publish Product button
          })
          cy.get('[class="text-grey-90 inter-xlarge-semibold"]').contains(Product_name).should('exist') //assertion
          var Back_toProducts = cy.get('[class="px-small py-xsmall mb-xsmall"]') 
          var spec = Back_toProducts.contains('Back to Products') // Back to products button
          spec.click()
          var new_Product_Table = cy.get('[color="inherit"]')
          new_Product_Table.contains(Product_name).should('exist') //assertion
    }

    duplicate_publishProducts(Product_name){
        cy.get('[class="gap-x-small flex"]').then((Publish_button)=>{
            cy.wrap(Publish_button).find('[class="btn btn-primary btn-small"]').click({force:true}) //Publish Product button
          })
          cy.get('.bg-grey-90').should('be.visible')
          cy.get('.bg-grey-90').should('contain.text', `Product with handle ${Product_name} already exists`) //assertion
    }

}
export default new calls()