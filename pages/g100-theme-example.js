/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/g100-theme-example.scss";
import {
  CardSectionImages,
  ContentBlockHorizontal,
  ContentBlockSegmented,
  FeatureCard,
  HorizontalRule,
  LeadSpace,
  LinkList,
  ScrollAnimations,
} from "@carbon/ibmdotcom-react";
// eslint-disable-next-line sort-imports
import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";

const DDSButtonGroup = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group"
  ),
  { ssr: false }
);
const DDSButtonGroupItem = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item"
  ),
  { ssr: false }
);

const DDSCTABlock = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/cta-block/cta-block"
  ),
  { ssr: false }
);
const DDSCTASection = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/cta-section/cta-section.js"
  ),
  { ssr: false }
);

// eslint-disable-next-line sort-imports
const DDSCard = dynamic(
  import("@carbon/ibmdotcom-web-components/es/components-react/card/card"),
  { ssr: false }
);

import DDSCardCTAFooter from "@carbon/ibmdotcom-web-components/es/components-react/cta/card-cta-footer";

const DDSCardEyebrow = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card/card-eyebrow"
  ),
  { ssr: false }
);

const DDSCardFooter = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card/card-footer"
  ),
  { ssr: false }
);

const DDSCardHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card/card-heading"
  ),
  { ssr: false }
);

const DDSCardInCard = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card"
  ),
  { ssr: false }
);

const DDSCardInCardImage = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card-in-card/card-in-card-image"
  ),
  { ssr: false }
);

const DDSCardSectionCarousel = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/card-section-carousel/card-section-carousel"
  ),
  { ssr: false }
);

const DDSCarousel = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel"
  ),
  { ssr: false }
);

const DDSContentBlockCopy = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-copy"
  ),
  { ssr: false }
);

const DDSContentBlockHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-block/content-block-heading"
  ),
  { ssr: false }
);

const DDSContentItemHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-item/content-item-heading"
  ),
  { ssr: false }
);

const DDSContentItemHorizontalMedia = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal-media"
  ),
  { ssr: false }
);

const DDSContentItemHorizontalMediaCopy = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-item-horizontal/content-item-horizontal-media-copy"
  ),
  { ssr: false }
);

const DDSContentSectionCopy = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-copy.js"
  ),
  { ssr: false }
);

const DDSContentSectionHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js"
  ),
  { ssr: false }
);

const DDSImage = dynamic(
  import("@carbon/ibmdotcom-web-components/es/components-react/image/image.js"),
  { ssr: false }
);

const DDSLinkList = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list"
  ),
  { ssr: false }
);

const DDSLinkListHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-heading"
  ),
  { ssr: false }
);

const DDSLinkListItem = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list-item"
  ),
  { ssr: false }
);

const DDSLinkListItemCTA = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-cta"
  ),
  { ssr: false }
);

const DDSLinkListSection = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-list-section/link-list-section"
  ),
  { ssr: false }
);

const DDSLinkWithIcon = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon.js"
  ),
  { ssr: false }
);

const DDSTab = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/tabs-extended/tab.js"
  ),
  { ssr: false }
);

const DDSTableOfContents = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/table-of-contents/table-of-contents.js"
  ),
  { ssr: false }
);

const DDSTabsExtendedMedia = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/tabs-extended-media/tabs-extended-media.js"
  ),
  { ssr: false }
);

const DDSVideoPlayerContainer = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container.js"
  ),
  { ssr: false }
);

import dynamic from "next/dynamic";
import React from "react";

/**
 * Setting the .html extension between local development and static deployment
 *
 * @type {string}
 * @private
 */
const _htmlExtension = process.env.NODE_ENV !== "production" ? "" : ".html";

const contentBlockCopy = `It’s fundamental to everything we design. The 2x Grid is the geometric foundation of all the visual elements of 
IBM Design, from typography to columns, boxes, icons, and illustrations. It provides structure and guidance for all creative decision-making. 

The basic unit of 2x Grid geometry is the 8-pixel square mini unit. Multiples of mini units compose the dimensions of columns, rows, 
boxes, along with their margins and padding. The mini unit adapts to your content while maintaining a consistent visual rhythm`;

const linkListProps = {
  heading: "Aside element",
  items: [
    {
      type: "local",
      copy: "Content block media",
      cta: {
        href: "https://www.ibm.com/standards/carbon/components/content-block-media",
      },
    },
    {
      type: "video",
      copy: "Link to a video",
      videoTitle: "test",
      media: {
        src: "1_9h94wo6b",
        type: "video",
      },
    },
    {
      type: "video",
      copy: "Link to another video",
      videoTitle: "test",
      media: {
        src: "1_9h94wo6b",
        type: "video",
      },
    },
  ],
};

const selectorTargets = `
  .bx--content-block__heading,
  .bx--content-block__copy,
  .bx--leadspace-block__media,
  .bx--link-list,
  .bx--leadspace-block__cta,
  .bx--feature-card-large,
  .bx--content-group,
  .bx--image,
  .bx--content-block__cta,
  .bx--callout-with-media,
  .bx--content-item-horizontal__item,
  .bx--logo-grid__col,
  .bx--card-group__cards__col,
  .bx--callout-quote,
  .bx--cta-section,
  .bx--cta-section__cta,
  .bx--content-item,
  dds-tabs-extended-media>dds-tab,
  dds-tabs-extended-media>*,
  .bx--tabs-extended-media,
  dds-content-item-horizontal-media,
  .bx--tabs__nav.bx--tabs__nav--hidden,
  dds-card-in-card,
  dds-card-section-carousel,
  dds-content-block-heading,
  dds-content-block-copy,
  dds-button-group,
  dds-link-list
`;

/**
 * g100 theme example page
 *
 * @returns {*} JSX for g100 theme example page
 */
const g100ThemeExample = () => (
  <div className="dds-theme-zone-g100">
    <LeadSpace
      type="tall"
      title="Leadspace left-aligned"
      copy="Lead space helps users understand where they landed, and what type of content they are going to find on the webpage. It will always be positioned at the top."
      gradient={true}
      buttons={[
        {
          copy: "See alternate template",
          href: "https://www.ibm.com/services",
          renderIcon: ArrowRight20,
        },
        {
          copy: "See components in action",
          href: "#content",
          renderIcon: ArrowDown20,
        },
      ]}
      image={{
        defaultSrc: "images/dark-leadspace-img.jpg",
        alt: "Image alt text",
      }}
    />
    <ScrollAnimations
      keepAnimations={true}
      animation={"slide-up"}
      selectorTargets={selectorTargets}
    >
      <DDSTableOfContents layout={"horizontal"}>
        <div class="bx--tableofcontents__contents">
          <a name="1" data-title="Card section images"></a>
          <CardSectionImages
            heading="Card section images"
            cards={[
              {
                image: {
                  defaultSrc: "images/card-section-img-1.png",
                  alt: "Image alt text",
                },
                eyebrow: "Card section",
                heading: "A collection of card components with images",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                image: {
                  defaultSrc: "images/card-section-img-2.png",
                  alt: "Image alt text",
                },
                eyebrow: "Card section",
                heading:
                  "The component occupies a full-width section with a header",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                image: {
                  defaultSrc: "images/card-section-img-3.png",
                  alt: "Image alt text",
                },
                eyebrow: "Underlying component",
                heading: 'Note that this uses the component "Card group"',
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                image: {
                  defaultSrc: "images/card-section-img-4.jpg",
                  alt: "Image alt text",
                },
                eyebrow: "Card",
                heading:
                  "Each card has a headline, image, optional eyebrow, body copy, and CTA",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                image: {
                  defaultSrc: "images/card-section-img-5.png",
                  alt: "Image alt text",
                },
                eyebrow: "Usage",
                heading:
                  "Use card section images to break up content with illustrative visuals or video",
                cta: {
                  href: "https://www.example.com",
                },
              },
            ]}
          />
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
                <a name="2" data-title="Feature card - large"></a>
                <FeatureCard
                  card={{
                    cta: {
                      href: "https://www.example.com",
                      icon: {
                        src: ArrowRight20,
                      },
                    },
                    eyebrow: "Feature card - large",
                    heading:
                      "This component helps highlight a key call-to-action that pairs with a visual to grab attention",
                    copy:
                      "The component comes in two sizes - medium and large. It is made up of an eyebrow, headline, image, and link. " +
                      "Body copy is optional. The entire card section, including the image, is clickable (or tappable on mobile).",
                    image: {
                      defaultSrc: "images/feature-card-illustration.png",
                      alt: "Image alt text",
                    },
                  }}
                  size={"large"}
                />

                <HorizontalRule />
                <a name="3" data-title="Content block segmented"></a>
                <ContentBlockSegmented
                  heading="Content Block Segmented"
                  copy={
                    "This component is a variation of content block simple, and works well as an introductory section to a page. " +
                    "This variation adds subsections to further break up complex topics into easy-to-read chunks. " +
                    "You can also optionally include a CTA, media (image or video), and quick links."
                  }
                  items={[
                    {
                      video: {
                        videoId: "1_9h94wo6b",
                        showCaption: true,
                      },
                    },
                    {
                      heading: "Using the content block components",
                      copy:
                        "The content block suite of components excels at presenting content on IBM.com. Feel free to mix and match these " +
                        "sections based on what works best with the type of story you want to tell and the types of content you want to showcase.",
                    },
                    {
                      heading: "About the 2x Grid",
                      copy: contentBlockCopy,
                    },
                  ]}
                  aside={{
                    items: <LinkList style="card" {...linkListProps} />,
                    border: true,
                  }}
                  cta={{
                    style: "card",
                    type: "local",
                    copy: "Learn about more about Content block segmented",
                    cta: {
                      href: "https;//www.ibm.com/services",
                    },
                  }}
                />

                <a name="4" data-title="Content block horizontal"></a>
                <ContentBlockHorizontal
                  heading={"Content Block Horizontal"}
                  items={[
                    {
                      eyebrow: "Component",
                      heading: "Content block horizontal",
                      copy:
                        "Content group horizontal is to present a group of relatively more important pieces of content such as " +
                        "products or solutions with more visual weight.",
                      cta: {
                        items: [
                          {
                            type: "local",
                            copy: "Learn more",
                            cta: {
                              href: "https://www.ibm.com/standards/carbon/components/content-block-horizontal",
                            },
                          },
                          {
                            type: "local",
                            copy: "See design specs",
                            cta: {
                              href: "https://ibm.box.com/s/rv5kmm0a4d9ded74v6yfk8ad5id5ghmx",
                            },
                          },
                        ],
                      },
                    },
                    {
                      eyebrow: "Motion",
                      heading: "Scroll animation",
                      copy:
                        "This page uses the *Scroll up* scroll animation on every section of the page content. " +
                        "Thoughtful use of animations can highlight key content and draw the user’s attention. ",
                      cta: {
                        items: [
                          {
                            type: "local",
                            copy: "See Web Component Storybook",
                            cta: {
                              href: "https://www.ibm.com/standards/carbon/web-components/?path=/story/components-scroll-animations--fade-once",
                            },
                          },
                          {
                            type: "local",
                            copy: "See React Storybook",
                            cta: {
                              href: "https://www.ibm.com/standards/carbon/react/?path=/story/components-scroll-animations--default",
                            },
                          },
                        ],
                      },
                    },
                    {
                      eyebrow: "Layout",
                      heading: "Spacing",
                      copy:
                        "Carbon for IBM.com uses uniform components, elements, and spacing to encourage consistency when designing for " +
                        "IBM.com experiences. Spacing scale and type tokens are used to ensure the information is well organized with consistency.",
                      cta: {
                        items: [
                          {
                            type: "local",
                            copy: "Learn more",
                            cta: {
                              href: "https://www.ibm.com/standards/carbon/guidelines/spacing",
                            },
                          },
                        ],
                      },
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <a name="5" data-title="Tabs extended with media"></a>
          <DDSTabsExtendedMedia>
            <DDSContentSectionHeading>
              Tabs extended with media
            </DDSContentSectionHeading>
            <DDSTab label="Image tab">
              <DDSContentItemHorizontalMedia align="left">
                <DDSImage
                  slot="media"
                  alt="Image alt text"
                  default-src="images/tabs-media-1.jpg"
                ></DDSImage>
                <DDSContentItemHeading>Image media</DDSContentItemHeading>
                <DDSContentItemHorizontalMediaCopy>
                  Use Tabs Extended media to display interactive, related
                  content and even add links to detail pages.
                </DDSContentItemHorizontalMediaCopy>
                <DDSLinkList slot="footer" type="vertical">
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com"
                    cta-type="local"
                  >
                    Explore Tabs extended with media
                  </DDSLinkListItemCTA>
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com"
                    cta-type="local"
                  >
                    Learn about images
                  </DDSLinkListItemCTA>
                </DDSLinkList>
              </DDSContentItemHorizontalMedia>
            </DDSTab>
            <DDSTab label="Another image">
              <DDSContentItemHorizontalMedia align="left">
                <DDSImage
                  slot="media"
                  alt="Image alt text"
                  default-src="images/tabs-media-2.png"
                ></DDSImage>
                <DDSContentItemHeading>Another image</DDSContentItemHeading>
                <DDSContentItemHorizontalMediaCopy>
                  This component excels at visual storytelling, while also
                  giving the user full control to look through the tabs.
                </DDSContentItemHorizontalMediaCopy>
                <DDSLinkList slot="footer" type="vertical">
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com/standards/carbon/components/tabs-extended-media"
                    cta-type="local"
                  >
                    Explore Tabs extended with media
                  </DDSLinkListItemCTA>
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com/design/language/"
                    cta-type="external"
                  >
                    Check out IBM Design Language
                  </DDSLinkListItemCTA>
                </DDSLinkList>
              </DDSContentItemHorizontalMedia>
            </DDSTab>
            <DDSTab label="Video tab">
              <DDSContentItemHorizontalMedia align="left">
                <DDSVideoPlayerContainer
                  slot="media"
                  id="my-video"
                  video-id="1_9h94wo6b"
                ></DDSVideoPlayerContainer>
                <DDSContentItemHeading>Video media</DDSContentItemHeading>
                <DDSContentItemHorizontalMediaCopy>
                  This component can also display videos within the tab content
                  area.
                </DDSContentItemHorizontalMediaCopy>
                <DDSLinkList slot="footer" type="vertical">
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com/standards/carbon/components/video"
                    cta-type="local"
                  >
                    Learn about video
                  </DDSLinkListItemCTA>
                </DDSLinkList>
              </DDSContentItemHorizontalMedia>
            </DDSTab>
            <DDSTab label="Tabs extended">
              <DDSContentItemHorizontalMedia align="left">
                <DDSImage
                  slot="media"
                  alt="Image alt text"
                  default-src="images/tabs-media-4.png"
                ></DDSImage>
                <DDSContentItemHeading>Tabs extended</DDSContentItemHeading>
                <DDSContentItemHorizontalMediaCopy>
                  You can use the Tabs extended component to organize other
                  kinds of editorial content into tabs on desktop and accordion
                  on mobile.
                </DDSContentItemHorizontalMediaCopy>
                <DDSLinkList slot="footer" type="vertical">
                  <DDSLinkListItemCTA
                    icon-placement="right"
                    href="https://www.ibm.com/standards/carbon/components/tabs-extended"
                    cta-type="local"
                  >
                    Explore Tabs extended
                  </DDSLinkListItemCTA>
                </DDSLinkList>
              </DDSContentItemHorizontalMedia>
            </DDSTab>
          </DDSTabsExtendedMedia>

          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
                <a name="6" data-title="Card in card"></a>
                <DDSCardInCard href="https://www.ibm.com/standards/carbon/components/card-in-card">
                  <DDSCardInCardImage
                    slot="image"
                    alt="Image alt text"
                    default-src="images/card-in-card.jpg"
                  ></DDSCardInCardImage>
                  <DDSCardEyebrow>Card in card</DDSCardEyebrow>
                  <DDSCardHeading>
                    Highlight a large media moment while keeping harmony in a
                    card group
                  </DDSCardHeading>
                  <DDSCardCTAFooter>
                    <ArrowRight20 slot="icon" />
                  </DDSCardCTAFooter>
                </DDSCardInCard>
              </div>
            </div>
          </div>
        </div>

        <a name="7" data-title="Link list section"></a>

        <DDSLinkListSection>
          <DDSContentSectionHeading>Link list section</DDSContentSectionHeading>
          <DDSLinkList>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/designing">
              Designing <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/developing">
              Developing <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/guidelines">
              Guidelines <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/guidelines/expressive-theme">
              Expressive Theme <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/react/?path=/story/overview-getting-started--page">
              React <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
            <DDSLinkListItem href="https://www.ibm.com/standards/carbon/web-components/?path=/story/overview-getting-started--page">
              Web Components <ArrowRight20 slot="icon" />
            </DDSLinkListItem>
          </DDSLinkList>
        </DDSLinkListSection>

        <a name="8" data-title="Card section carousel"></a>
        <DDSCardSectionCarousel>
          <DDSContentSectionHeading>
            Card section carousel
          </DDSContentSectionHeading>
          <DDSContentSectionCopy>
            Allows users to explore multiple pieces of content within the same
            area
          </DDSContentSectionCopy>
          <DDSLinkWithIcon
            slot="footer"
            href="https://www.ibm.com/standards/carbon"
          >
            See all components
            <ArrowRight20 slot="icon" />
          </DDSLinkWithIcon>
          <DDSCarousel>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Cards</DDSCardHeading>
              The main content of the carousel lives on these cards. You can use
              any variation of the card component to populate the carousel.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Carousel controls</DDSCardHeading>
              The Icon buttons and pagination to the bottom right provide
              navigational controls for browsing the carousel. They are required
              in this component.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Number of cards</DDSCardHeading>
              The recommended amount of content is a minimum of 5 cards and
              maximum of 15 cards to avoid excessive clicking for the user.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Related content</DDSCardHeading>
              Do not add essential content to a carousel. Essential content
              could include navigational or wayfinding content links.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>No essential content</DDSCardHeading>
              Do not add essential content to a carousel. Essential content
              could include navigational or wayfinding content links.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Most important content</DDSCardHeading>
              Prioritize the most important content at the beginning of the
              carousel.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Simple and concise</DDSCardHeading>
              Carousel content should be simple and concise.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
            <DDSCard href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section-carousel">
              <DDSCardHeading>Use cases</DDSCardHeading>
              Common content used in carousels includes use cases, news
              articles, client testimonials, and quotes.
              <DDSCardFooter>
                <ArrowRight20 slot="icon" />
              </DDSCardFooter>
            </DDSCard>
          </DDSCarousel>
        </DDSCardSectionCarousel>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
              <HorizontalRule />
            </div>
          </div>
        </div>

        <a name="8" data-title="CTA section"></a>
        <DDSCTASection>
          <DDSCTABlock _noBorder>
            <DDSContentBlockHeading>CTA section</DDSContentBlockHeading>
            <DDSContentBlockCopy>
              Used to communicate actions that users can take along with some
              information that is relevant to those actions. This variation uses
              a link list below the main CTAs.
            </DDSContentBlockCopy>
            <DDSButtonGroup slot="action">
              <DDSButtonGroupItem
                href={`./white-theme-example${_htmlExtension}`}
              >
                <ArrowRight20 slot="icon" />
                See alternate template
              </DDSButtonGroupItem>
              <DDSButtonGroupItem href="https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/">
                <ArrowRight20 slot="icon" />
                Carbon for IBM.com
              </DDSButtonGroupItem>
            </DDSButtonGroup>
            <DDSLinkList slot="link-list" type="end">
              <DDSLinkListHeading>Link list</DDSLinkListHeading>
              <DDSLinkListItem href="https://www.ibm.com/standards/carbon/components/cta">
                CTA <ArrowRight20 slot="icon" />
              </DDSLinkListItem>
              <DDSLinkListItem href="https://www.ibm.com/standards/carbon/web-components/?path=/story/components-cta-block--default">
                CTA block <ArrowRight20 slot="icon" />
              </DDSLinkListItem>
              <DDSLinkListItem href="https://www.ibm.com/standards/carbon/components/cta-section">
                CTA section <ArrowRight20 slot="icon" />
              </DDSLinkListItem>
              <DDSLinkListItem href="https://www.ibm.com/standards/carbon/web-components/?path=/story/components-cta-section--simple">
                Web Components Storybook <ArrowRight20 slot="icon" />
              </DDSLinkListItem>
              <DDSLinkListItem href="https://www.ibm.com/standards/carbon/react/?path=/story/components-cta-section--default">
                React Storybook <ArrowRight20 slot="icon" />
              </DDSLinkListItem>
            </DDSLinkList>
          </DDSCTABlock>
        </DDSCTASection>
      </DDSTableOfContents>
    </ScrollAnimations>
    <script
      dangerouslySetInnerHTML={{
        __html: `document.querySelector('.bx--dotcom-shell').style = 'background: #161616;'`,
      }}
    />
  </div>
);
export default g100ThemeExample;
