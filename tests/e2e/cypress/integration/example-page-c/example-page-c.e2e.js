/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("Example page C page", () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
  });

  it("should load the default example-page-c page", () => {
    cy.visit("/example-page-c.html");

    cy.wait(800);

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page c | default");
  });
});
