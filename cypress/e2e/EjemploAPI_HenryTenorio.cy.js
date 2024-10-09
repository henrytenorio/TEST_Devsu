/// <reference types = "cypress" />

describe('Test GET request', () => {
    it('Realiza una solicitud GET a Swagger Petstore', () => {
        const requestBody = {
            "id": 1,
            "category": {
                "id": 1,
                "name": "PerrITO"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "PET"
                }
            ],
            "status": "available"
        }

        const requestUpdateBody = {
            "id": 1,
            "category": {
                "id": 1,
                "name": "PerrITO UPDATE"
            },
            "name": "doggie",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "PET"
                }
            ],
            "status": "sold"
        }

        //Crea PET
       cy.api({
        method: 'POST',
        url:  'https://petstore.swagger.io/v2/pet',
        body:requestBody
       }) 

       //Consulta por ID, mascota creada
       cy.api({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/1',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });

       //Actualiza PET
       cy.api({
        method: 'PUT',
        url:  'https://petstore.swagger.io/v2/pet', 
        body:requestUpdateBody
       }) 
        
       //Consulta por ESTADO
      cy.api({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold',
      }).then((response) => {
        expect(response.status).to.eq(200);
      });



    });
  });