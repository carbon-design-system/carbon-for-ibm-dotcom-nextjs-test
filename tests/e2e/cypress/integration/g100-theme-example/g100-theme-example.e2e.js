/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("g100 theme example page", () => {
  it("should load the default g100-theme-example page", () => {
    cy.visit("/g100-theme-example.html");

    cy.waitUntil(() =>
      cy
        .get('[data-autoid="dds--masthead-default__l0-nav0"] a')
        .should("not.be.empty")
    );

    cy.get(".bx--image__img").each(($img) => {
      cy.waitUntil(() => cy.wrap($img).should("be.visible"));
    });

    cy.wait(1000);

    // Take a snapshot for visual diffing
    cy.percySnapshot("g100-theme-example page | default");
  });
});
