class calls{
    gotoCollection_section(){
        cy.get('[class="Collapsible"]').then((navbar)=>{
            cy.wrap(navbar).contains('Products').click()
           })
           cy.get('[class="large:px-xlarge py-xlarge bg-grey-5 min-h-content overflow-y-auto"]').should('be.visible') //assertion
      
           var cursorTypes = cy.get('[class="cursor-pointer"]')
           cursorTypes.contains('Collections').as('collectionButton') // collections button
           cy.get('@collectionButton').click()

    }

    enterCollection_details(collectionName){

         // cy.get('[class="flex space-x-2"]').then((navButton)=>{
    //   cy.wrap(navButton).find('[class="btn btn-secondary btn-small"]').contains('New Collection').click() // select New-Product Button
    // })

        cy.get('[class="flex space-x-2"]').within((tryButton)=>{
            cy.wrap(tryButton).find('[class="btn btn-secondary btn-small"]').contains('New Collection').click() // within can also be used instead of 'then()' method used above
         })
         var nameInput = cy.get('input[placeholder="Sunglasses"]')
         nameInput.type(collectionName)
    }

    publishCollection(collectionName){
        cy.get('[class="gap-x-xsmall flex w-full items-center justify-end"]').then((Publish_collectionButton)=>{
            cy.wrap(Publish_collectionButton).find('[class="btn btn-primary btn-small"]').click({force:true}) //Publish Collection button
          })
      cy.get('.bg-grey-90').should('be.visible')
      cy.get('.bg-grey-90').should('contain.text', 'Successfully created collection')
      var new_Product_Table = cy.get('[color="inherit"]')
          new_Product_Table.contains(collectionName).should('exist')
    }

     duplicate_publishCollection(collectionName){
        cy.get('[class="gap-x-xsmall flex w-full items-center justify-end"]').then((Publish_collectionButton)=>{
            cy.wrap(Publish_collectionButton).find('[class="btn btn-primary btn-small"]').click({force:true}) //Publish Collection button
          })
      cy.get('.bg-grey-90').should('be.visible')
      cy.get('.bg-grey-90').should('contain.text', `Product_collection with handle ${collectionName} already exists`)
        }
    //     cy.get('[class="gap-x-xsmall flex w-full items-center justify-end"]').then((Publish_collectionButton)=>{
    //         cy.wrap(Publish_collectionButton).find('[class="btn btn-primary btn-small"]').click({force:true}) //Publish Collection button
    //       })
    //       cy.wait('.bg-grey-90')
    //   cy.get('.bg-grey-90').should('be.visible')
    //   cy.get('.bg-grey-90').should('contain.text', `Product_collection with handle ${collectionName} already exists`)
        
    // }

}
export default new calls()