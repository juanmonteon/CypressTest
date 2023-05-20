import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given("A web browser is at upload image page", () => {
    cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html");
  });
/*
  When('A user click to search an image and upload it', () => {
    cy.get('[name="userfile"]').click()
  });*/

  When('the image will be uploaded successfully', () => {
    cy.get('[name="userfile"]')
    .selectFile('cypress/e2e/features/237-536x354.JPEG')
  });