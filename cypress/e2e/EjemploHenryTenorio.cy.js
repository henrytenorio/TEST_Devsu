/// <reference types = "cypress" />


it ('demoblaze', function(){
    //Abrir sitio
    cy.visit("https://www.demoblaze.com")
    cy.wait(2000)

    //Agregar Producto1
    cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(2000)

    //Inicio para seleccionar otro producto
    cy.get('.active > .nav-link').click()
    cy.wait(2000)


    //Agregar Producto2
    cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').click()
    cy.wait(2000)
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(2000)
    
    //ver carrito
    cy.get('#cartur').click()
    cy.wait(2000)

    //Place Order
    cy.get('.col-lg-1 > .btn').click()
    cy.wait(2000)

    //Completar Formulario
    cy.get('#name').type("NameUSer")
    cy.wait(2000)

    cy.get('#country').type("Ecuador")
    cy.wait(2000)

    cy.get('#city').type("Quito")
    cy.wait(2000)

    cy.get('#card').type("2510665278954512")
    cy.wait(2000)
    
    cy.get('#month').type("October")
    cy.wait(2000)

    cy.get('#year').type("2026")
    cy.wait(2000)
    
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)


    
}

// it ('Opencart', function(){
//     //Abrir sitio
//     cy.visit("http://opencart.abstracta.us/")
//     cy.wait(2000)

//     //Agregar Producto1
//     cy.get('#search').type("iPhone\n")
//     cy.wait(2000)
//     cy.get('h4 > a').click()
//     cy.wait(2000)
//     cy.get('#button-cart').click()
//     cy.wait(2000)
    
//     //Inicio para limpiar busqueda
//     cy.get('h1 > a').click()
//     cy.wait(2000)
    
//     //Agregar Producto2
//     cy.get('#search').type("MacBook Air\n")
//     cy.wait(2000)
//     cy.get('h4 > a').click()
//     cy.wait(2000)
//     cy.get('#button-cart').click()
//     cy.wait(2000)

//     //Ver Carrito
//     cy.get('#cart-total').click()
//     cy.wait(2000)

//     //Pantalla de CheckOut
//     cy.get('[href="https://opencart.abstracta.us:443/index.php?route=checkout/checkout"] > strong').click()
//     cy.wait(2000)

//     //Step1
//     //cy.get('[type="radio"]').check('guest')
//     //cy.get('div.panel-body div.row div.col-sm-6 div.radio label input[type="radio"][value="guest"]').check()
//     //cy.get('div.contenedor input[type="radio"][value="1"]').check();
//     //cy.get('[type="radio" value="guest"]').first().check()
//     //cy.get('[type="radio"].Guest Checkout').check()
//     //cy.get('[type="radio"]').first().check()
//     //cy.get('guest').click()
//     //cy.get("input[value='guest']").should("be.visible")
//     //cy.get("input[value='guest']").check()
//     // cy.wait(2000)
    
    
// }
)