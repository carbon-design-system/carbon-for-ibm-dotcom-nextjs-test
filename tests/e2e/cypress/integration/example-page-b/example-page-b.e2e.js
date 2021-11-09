/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("Example page B page", () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
  });

  it("should load the default example-page-b page", () => {
    cy.visit("/example-page-b.html");

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page b | default");
  });
});
