describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Opens the gallery page and checks visibility of gallery elements', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper').should('be.visible');
    cy.get('.swiper-slide').each(($slide) => {
      cy.wrap($slide).should('be.visible');
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(2000)
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.wait(2000)
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.wait(2000)
    });
  });
});

describe("Swiper Gallery Test", function () {
  it('Clicks swiper next button three times and ensures the first image is displayed', function () {
    // Otwórz stronę z galerią.
    cy.visit('http://localhost:3000');

    // Kliknij przycisk "Następny" trzy razy.
    cy.get('.swiper-button-next').click().wait(2000).click().wait(2000).click().wait(2000);

    // Sprawdź, czy pierwszy obrazek jest widoczny.
    cy.get('.swiper-slide').eq(0).should('be.visible');
  });
})
