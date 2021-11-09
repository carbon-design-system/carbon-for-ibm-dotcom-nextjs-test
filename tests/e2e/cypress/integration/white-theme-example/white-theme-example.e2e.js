/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("White theme example page", () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
  });

  it("should load the default white-theme-example page", () => {
    cy.visit("/white-theme-example.html");

    // Take a snapshot for visual diffing
    cy.percySnapshot("white theme example | default");
  });
});
