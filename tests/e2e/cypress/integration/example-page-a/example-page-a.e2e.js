/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/**
 * Collection of all tests for dds-table-of-contents
 *
 * @property {function} all
 * @property {function} desktop
 * @private
 */
const _tests = {
  /**
   * Collection of tests for use on desktop-sized viewports.
   *
   * @function checkRender            - Asserts [linkID] === [sectionID]
   * @function checkLinkFunctionality - Asserts each link scrolls page to proper position
   * @function checkScrollSpy         - Asserts each link updates onscroll properly
   * @function checkStickyNav         - Asserts navigation stays within viewport
   * @function checkClickableCard     - Asserts each card is clickable
   */
  desktop: {
    checkRender: () => {
      const navItemsIds = [];
      const sectionIds = [];

      cy.get(".bx--tableofcontents__desktop__item a")
        .each((link) => {
          navItemsIds.push(link.attr("href").replace("#", ""));
        })
        .get("a[name]")
        .each((section) => {
          sectionIds.push(section.attr("name"));
        })
        .then(() => {
          expect(navItemsIds).to.deep.equal(sectionIds);
        });
    },
    checkLinkFunctionality: () => {
      const maxScrollVal = document.body.clientHeight - window.innerHeight;

      cy.get(".bx--tableofcontents__desktop__item a").each((link, i) => {
        cy.get(link)
          .click()
          .get(`a[name="${link.attr("href").replace("#", "")}"]`)
          .then((section) => {
            const sectionScrolledTo =
              section.offset().top === 0 || window.scrollY === maxScrollVal;
            expect(sectionScrolledTo).to.be.true;
          });
      });
    },
    checkScrollSpy: () => {
      cy.get("a[name]").each((section, i) => {
        cy.scrollTo(0, section.offset().top)
          .wait(1000) // Give the browser time to execute the event callback.
          .get(`a[href="#${section.attr("name")}"]`)
          .then((link) => {
            expect(link.attr("aria-current")).to.equal("location");
            expect(link.parent()).to.have.class(
              "bx--tableofcontents__desktop__item--active"
            );
          });
      });
    },
    checkStickyNav: () => {
      cy.wrap(["top", "center", "bottom"]).each((pos) => {
        cy.scrollTo(pos)
          .get(".bx--tableofcontents__desktop")
          .then((sidebar) => {
            expect(sidebar.offset().top).to.be.greaterThan(0);
          });
      });
    },
    checkClickableCard: () => {
      it("should check for link", () => {
        cy.get(`.bx--card a.bx--link`).then(($link) => {
          const url = $link.prop("href");
          expect(url).not.to.be.empty;
        });
      });

      it("should check that the footer's pseudo class takes up entire card to be clickable", () => {
        cy.get(`.bx--card a.bx--link`).then(($els) => {
          const win = $els[0].ownerDocument.defaultView;
          const after = win.getComputedStyle($els[0], ":after");
          const positionValue = after.getPropertyValue("position");
          const insetValue = after.getPropertyValue("inset");

          expect(positionValue).to.eq("absolute");
          if (Cypress.browser.name !== "firefox") {
            expect(insetValue).to.eq("0px");
          }
        });
      });
    },
  },
};

describe("Example page A page", () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
    cy.visit("/example-page-a.html");
    cy.viewport(1280, 780);
  });

  it("should load the default example-page-a page", () => {
    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | default");
  });

  it("should load the masthead and megamenu", () => {
    cy.get(".bx--header__menu-item").eq(0).click({ force: true });

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | megamenu opens");
  });

  it("should load the masthead search", () => {
    cy.get('[data-autoid="dds--masthead-default__l0-search"]').click({
      force: true,
    });

    cy.get('[data-autoid="dds--masthead__search"]')
      .find('input[data-autoid="dds--header__search--input"]')
      .type("redhat", { force: true });

    cy.get(".react-autosuggest__suggestions-list li").should("have.length", 10);

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | masthead search opens");
  });

  it("should have 2 menu items under the login menu", () => {
    cy.get('[data-autoid="dds--masthead-default__l0-account"]').click({
      force: true,
    });
    cy.get(".bx--masthead__profile-item").should("have.length", 2);

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | profile options loading");
  });

  it("should render leadspace below the masthead", () => {
    cy.visit("/example-page-a.html");
    cy.viewport(1280, 780);
    cy.get('[data-autoid="dds--leadspace"]').then(($image) => {
      expect($image[0].getBoundingClientRect().top).to.equal(48);
    });
  });

  it(
    "should load table of contents sidebar with links",
    _tests.desktop.checkRender
  );

  it(
    "should navigate content to selected section",
    _tests.desktop.checkLinkFunctionality
  );

  xit("should update current section on scroll", _tests.desktop.checkScrollSpy);

  it(
    "should remain visible on page throughout scroll",
    _tests.desktop.checkStickyNav
  );

  it("should load content block - mixed group with contents", () => {
    cy.get('[data-autoid="dds--content-block-mixed"]').within(() => {
      cy.get(".bx--content-layout__aside .bx--link-list__list__CTA").should(
        "have.length",
        2
      );

      cy.get('[data-autoid="dds--content-group-cards"]').within(() => {
        cy.get('[data-autoid="dds--content-group-cards-item"]').should(
          "have.length",
          4
        );
      });

      cy.get('[data-autoid="dds--content-group-pictograms"]').within(() => {
        cy.get('[data-autoid="dds--pictogram-item"]').should("have.length", 3);
      });

      cy.get('[data-autoid="dds--content-group-simple"]').within(() => {
        cy.get('[data-autoid="dds--image-with-caption"]').should("be.visible");
        cy.get('[data-autoid="dds--content-item"]').should("have.length", 2);
      });

      cy.get('[data-autoid="dds--content-block__cta"]').should("be.visible");
    });
  });

  it("should load content block - segmented with contents", () => {
    cy.get('[data-autoid="dds--content-block-segmented"]').within(() => {
      cy.get('[data-autoid="dds--content-block__heading"]').should(
        "be.visible"
      );
      cy.get('[data-autoid="dds--image-with-caption"]').should("be.visible");
      cy.get('[data-autoid="dds--content-item"]').should("have.length", 2);
      cy.get('[data-autoid="dds--content-block__cta"]').should("be.visible");
    });
  });

  it("should load content block - simple with contents", () => {
    cy.get('[data-autoid="dds--content-block-simple"]').within(() => {
      cy.get('[data-autoid="dds--content-block__heading"]').should(
        "be.visible"
      );
      cy.get('[data-autoid="dds--content-item"]').should("be.visible");
      cy.get('[data-autoid="dds--image-with-caption"]').should("be.visible");
      cy.get('[data-autoid="dds--content-block__cta"]').should("be.visible");
    });
  });

  it("should load content block - media with contents", () => {
    cy.get('[data-autoid="dds--content-block-media"]').within(() => {
      cy.get('[data-autoid="dds--content-block__heading"]').should(
        "be.visible"
      );
      cy.get(".bx--content-block__copy").should("be.visible");
      cy.get('[data-autoid="dds--content-item"]').should("be.visible");

      cy.get('[data-autoid="dds--image-with-caption"]').should(
        "have.length",
        2
      );
      cy.get('[data-autoid="dds--content-item"]').should("have.length", 4);
      cy.get('[data-autoid="dds--content-group__cta"]').should("be.visible");
    });
  });

  it("should load feature card", () => {
    cy.get('[data-autoid="dds--feature-card"]').should("be.visible");
  });

  it("should load card section - with images", () => {
    cy.get('[data-autoid="dds--card-group-images-group"]').within(() => {
      const cards = cy.get('[data-autoid="dds--card"]');
      cards.should("have.length", 5);
      cy.get(".bx--image").should("have.length", 5);

      _tests.desktop.checkClickableCard();
    });
  });

  it("should load card section - simple", () => {
    cy.get('[data-autoid="dds--card-group-simple-group"]').within(() => {
      const cards = cy.get('[data-autoid="dds--card"]');
      cards.should("have.length", 6);
      cards.eq(5).should("have.class", "bx--card--inverse");

      _tests.desktop.checkClickableCard();
    });
  });

  it("should load footer and clickable content", () => {
    cy.get('[data-autoid="dds--footer-logo__link"]').then(($link) => {
      const url = $link.prop("href");
      expect(url).not.to.be.empty;
    });
    cy.get('[data-autoid="dds--footer-nav-group__link"]')
      .first()
      .scrollIntoView();

    // TODO: investigate why Cypress renders 41 links instead
    // cy.get(`[data-autoid="dds--footer-nav-group__link"]`).should(
    //   "have.length",
    //   38
    // );

    cy.get(`[data-autoid^='dds--footer-legal-nav__']`).should("have.length", 4);

    cy.get(`[data-autoid^='dds--footer-legal-nav__']`).each(($link) => {
      const url = $link.prop("href");
      expect(url).not.to.be.empty;
    });

    cy.screenshot();
  });

  it("should load operable locale modal", () => {
    const localeButton = cy.get(`[data-autoid="dds--locale-btn"]`);
    localeButton.click();

    cy.get('[data-region="am"]').click();
    cy.get('[data-autoid="dds--locale-modal__filter"]').type("mexico", {
      force: true,
    });

    cy.get(
      ".bx--locale-modal__locales:not(.bx--locale-modal__locales-hidden) > div"
    )
      .first()
      .then((e) => {
        expect(e.text()).to.equal("Mexico");
      });

    // Take a snapshot for visual diffing
    cy.percySnapshot("example page a | locale modale opened");
  });
});
