require('cypress-xpath')

describe('daraz', () => {
    it('login', () => {
        cy.visit('https://www.daraz.com.np')
        cy.xpath('/html/body/div[1]/div/div/div[1]/div/div/div[1]/div/div[5]/a').click()
        cy.get('input[type=text]').type('ggairekamala123@gmail.com')
        cy.get('input[type=password]').type('Test@123')
        cy.get('.next-btn').click()
        cy.wait(5000)
    });

    it('filters', () => {
        cy.get('.search-box__input--O34g').type('Mobile')
        cy.get('.search-box__button--1oH7').click()
        cy.wait(5000)
        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[1]/label[6]/span[2]').click()
        cy.wait(2000)
        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[6]/div[2]/div[1]/ul[1]/li[5]/div[2]/i[1]').click()
        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[6]/div[2]/div[2]/span[1]').click()
        cy.wait(2000)
    });

        it('cart',() => {
        cy.xpath('/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]').click()
        //cy.get('.pdp-button-text').click()
        cy.xpath('/html[1]/body[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]/div[14]/div[1]/button[2]/span[1]/span[1]').click()
        cy.wait(4000)
        cy.xpath('/html[1]/body[1]/div[8]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[2]/button[2]').click()
        //cy.get('.automation-btn-delete').click()
        cy.xpath('/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/span[2]/span[1]').click()

        cy.wait(2000)
        cy.xpath('/html[1]/body[1]/div[6]/div[1]/div[2]/div[3]/button[1]').click()
        cy.wait(2000)
    });

        it('oliz',() => {
        cy.get('.search-box__input--O34g').type('Oliz Store')
        cy.get('.search-box__button--1oH7').click()
        cy.wait(2000)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/nav[1]/a[5]/span[1]').click()



    });
    });