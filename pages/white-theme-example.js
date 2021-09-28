/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/white-theme-example.scss";
import {
  CTASection,
  CalloutQuote,
  CardSectionSimple,
  ContentBlockMedia,
  ContentBlockSimple,
  ContentGroupCards,
  ContentGroupPictograms,
  LeadSpace,
  LinkList,
  LogoGrid,
  ScrollAnimations,
  TableOfContents,
} from "@carbon/ibmdotcom-react";
// eslint-disable-next-line sort-imports
import { ArrowDown20, ArrowRight20 } from "@carbon/icons-react";
import {
  Desktop,
  HybridCloud_02,
  SecureSearch,
} from "@carbon/pictograms-react";

const DDSBackToTop = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/back-to-top/back-to-top"
  ),
  { ssr: false }
);

const DDSCard = dynamic(
  import("@carbon/ibmdotcom-web-components/es/components-react/card/card"),
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

const DDSContentGroupBanner = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-group-banner/content-group-banner"
  ),
  { ssr: false }
);

const DDSContentGroupHeading = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/content-group/content-group-heading"
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

const DDSLinkList = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-list/link-list"
  ),
  { ssr: false }
);

const DDSLinkListItemCTA = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/cta/link-list-item-cta"
  ),
  { ssr: false }
);

const DDSLinkWithIcon = dynamic(
  import(
    "@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon.js"
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

const contentBlockCopy = `Content block simple works well as an introductory section on a page by providing a clear starting point for the user. 
By default, this component works the best as at the top of the page and includes a heading, introductory paragraph, optional 
media (image or video), optional CTA (call-to-action), and a horizontal rule at the bottom before the next component. 


A variation of this component brings in aside elements and can introduce navigational quick links on the right side on desktop. 
You can see the aside element at work in the Content block media component directly below this one.`;

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
  dds-content-group-banner,
  dds-content-group-banner dds-link-list,
  dds-button-group,
  dds-link-list,
  dds-card-section-carousel,
  .scroll-target,
  .bx--layout-1-3,
  .bx--content-section.bx--content-section-layout
`;

/**
 * White Theme Example page
 *
 * @returns {*} JSX for White theme example page
 */
const WhiteThemeExample = () => (
  <>
    <LeadSpace
      type="centered"
      theme="white"
      title="Leadspace centered"
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
        defaultSrc: "images/nextjs-white-leadspace.png",
        alt: "Image alt text",
      }}
    />
    <ScrollAnimations
      keepAnimations={true}
      animation={"slide-up"}
      selectorTargets={selectorTargets}
    >
      <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
        <a
          id="content"
          name="content-block-simple"
          data-title="Content Block Simple"
        />
        <ContentBlockSimple
          heading="Content Block Simple"
          copy={contentBlockCopy}
          cta={{
            style: "card",
            type: "local",
            copy: "Learn about Content block simple",
            cta: {
              href: "https;//www.ibm.com/services",
            },
          }}
        />
        <a name="content-block-media" data-title="Content Block Media" />
        <ContentBlockMedia
          heading="Content block media"
          copy={
            "Content block media is used to spotlight an image or video in the content of the page. " +
            "It starts with a brief overview (this text) before presenting an image or video, and any details you want to pull out below that. " +
            "Optionally, combine with a link or card element."
          }
          items={[
            {
              mediaType: "video",
              heading: "Introduction to the media",
              mediaData: {
                videoId: "0_uka1msg4",
                showCaption: true,
              },

              items: [
                {
                  heading: "Aside elements",
                  copy:
                    "Note that this component is using the variation that includes an aside element (in this case, a link list) " +
                    "along the right side of the page on desktop. This can be used to highlight key links and allow the user to jump " +
                    "to content that is most relevant in the moment.",
                },
                {
                  heading: "Combining Content block elements",
                  copy:
                    "You can check the [design specs](https://ibm.ent.box.com/folder/94760926421?s=9cu22l7vs1dpjy8g8yi3mtoswazqgq2r) to get a sense of how to combine these content block components to create a cohesive story. " +
                    "Pair Content block media content together to break up content or segue into another component for impact.",
                },
                {
                  heading: "Scroll animations",
                  copy:
                    "This page uses the *Scroll up* scroll animation on every section of the page content. " +
                    "Thoughtful use of animations can highlight key content and draw the user’s attention. " +
                    "You can find more examples of scroll animations in our [Storybook](https://www.ibm.com/standards/carbon/react/?path=/story/components-scroll-animations--slide-up).",
                },
              ],
            },
          ]}
          aside={{ items: <LinkList style="card" {...linkListProps} /> }}
        />
        <CalloutQuote
          quote={{
            copy: "The Callout quote is a typographic layout that is used to highlight an impactful client statement or user testimonial",
            source: {
              heading: "Speaker’s name",
              copy: "Additional info such as title or company ",
            },
            cta: {
              copy: "See more about the Callout quote",
              type: "local",
              href: "https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/callout-quote",
            },
          }}
        />

        <a
          name="content-group-pictograms"
          data-title="Content Group Pictograms"
        />
        <ContentGroupPictograms
          className={"bx--layout-2-3"}
          heading="Content Group Pictograms"
          copy={
            "This component is used to present a group of information, each with a supporting pictogram. " +
            "Use this to break up otherwise dense content with images for a better and more scannable reading experience."
          }
          items={[
            {
              heading: "Pictograms in action",
              copy:
                "IBM’s pictograms are visual symbols used to represent ideas, objects or narratives. " +
                "They can communicate messages at a glance, afford interactivity, and simplify complex ideas. " +
                "They work well with presentations and marketing communications.",
              cta: {
                type: "local",
                href: "https://www.ibm.com/standards/carbon/components/content-group-pictograms",
                copy: "Content group pictograms",
              },
              pictogram: {
                src: Desktop,
                "aria-label": "Desktop Pictogram",
              },
            },
            {
              heading: "Finding pictograms for your page",
              copy:
                "The IBM Design Language site houses many pictograms you can use for your project, and includes instructions " +
                "on creating a custom pictogram. Only the productive pictogram set are used in these sections.",
              cta: {
                type: "local",
                href: "https://www.ibm.com/design/language/iconography/pictograms/library",
                copy: "IBM Design Language pictogram library",
              },
              pictogram: {
                src: SecureSearch,
                "aria-label": "Secure Search Pictogram",
              },
            },
            {
              heading: "At least three pictogram sections",
              copy:
                "The Content group pictogram component should always include at least three pictogram sections. " +
                "If you have less than two sections worth of content, consider another component.",
              pictogram: {
                src: HybridCloud_02,
                "aria-label": "Secure Search Pictogram",
              },
            },
          ]}
        />

        <a name="content-group-cards" data-title="Content Group Cards" />
        <div className="bx--layout-2-3">
          <ContentGroupCards
            heading={"Content group cards"}
            copy={
              "Content group cards is used to present information through a group of cards with each acting as a call to action " +
              "that drives to additional or supporting destinations. It is suitable for adding concise buckets of content and links to a long-form reading."
            }
            items={[
              {
                heading: "Default",
                copy: "Content group cards includes a section heading, body copy, and any number of card components listed below.",
                cta: {
                  href: "https://www.ibm.com/standards/carbon/components/content-group-cards",
                },
              },
              {
                heading: "Usage in a content block",
                copy: "This pattern can be used multiple times within a content block.",
                cta: {
                  href: "https://www.ibm.com/standards/carbon/components/content-group-cards",
                },
              },
              {
                heading: "Card component",
                copy: "The Card component used here contains a title, body copy, and a CTA icon to communicate interactivity.",
                cta: {
                  href: "https://www.ibm.com/standards/carbon/components/content-group-cards",
                },
              },
              {
                heading: "Avoid solo cards",
                copy: "Try to avoid having orphan or single hanging cards in a row by itself.",
                cta: {
                  href: "https://www.ibm.com/standards/carbon/components/content-group-cards",
                },
              },
            ]}
          />
        </div>

        <a name="logo-grid" data-title="Logo Grid" />
        <LogoGrid
          heading="Logo Grid"
          logosGroup={[
            {
              title: "Microsoft",
              imgSrc: "images/logo-microsoft.png",
              altText: "Image alt text",
            },
            {
              title: "Dell",
              imgSrc: "images/logo-dell.png",
              altText: "Dell",
            },
            {
              title: "Rabobank",
              imgSrc: "images/logo-rabobank.png",
              altText: "Rabobank",
            },
            {
              title: "Bendigo",
              imgSrc: "images/logo-bendigo.png",
              altText: "Bendigo",
            },
            {
              title: "NBC Universal",
              imgSrc: "images/logo-nbcuniversal.png",
              altText: "NBC Universal",
            },
            {
              title: "Cisco",
              imgSrc: "images/logo-cisco.png",
              altText: "Cisco",
            },
          ]}
        />
      </TableOfContents>

      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
            <DDSContentGroupBanner>
              <DDSContentGroupHeading>
                Content group banner: a subtle callout for tangential
                information or announcements
              </DDSContentGroupHeading>
              <DDSLinkList type="vertical" slot="complementary">
                <DDSLinkListItemCTA
                  icon-placement="right"
                  href="https://www.ibm.com/standards/carbon/components/content-group-banner"
                  cta-type="local"
                >
                  Content group banner
                </DDSLinkListItemCTA>
                <DDSLinkListItemCTA
                  icon-placement="right"
                  href="https://www.ibm.com"
                  cta-type="external"
                >
                  Resource video
                </DDSLinkListItemCTA>
              </DDSLinkList>
            </DDSContentGroupBanner>
          </div>
        </div>
      </div>
      <CardSectionSimple
        heading="Card section"
        theme="white"
        cards={[
          {
            heading: "Card section",
            copy:
              "The card section is a collection of cards presented in a full-width section" +
              "with a left-column header that responds to the grid.",
            cta: {
              href: `https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section`,
            },
          },
          {
            heading: "Cards",
            copy: "The main content of the carousel lives on these cards.",
            cta: {
              href: `https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section`,
            },
          },
          {
            heading: "Variation",
            copy: "Previewed here is a variation of Card section that includes the high contrast card at the end of the card collection.",
            cta: {
              href: `https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section`,
            },
          },
          {
            heading: "Avoid orphan cards",
            copy: "Try to avoid having orphan or single hanging cards in a row by itself.",
            cta: {
              href: `https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/card-section`,
            },
          },
        ]}
        cta={{
          heading: "A variation includes a high contrast Call-to-action",
          cta: {
            href: "https://www.example.com",
          },
        }}
      />

      <div className="scroll-target">
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
      </div>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
            <CTASection
              theme="white"
              cta={{
                style: "button",
                type: "local",
                buttons: [
                  {
                    type: "local",
                    copy: ["See alternate template"],
                    href: `./g100-theme-example${_htmlExtension}`,
                  },
                  {
                    type: "local",
                    copy: ["Carbon for IBM.com"],
                    href: "https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/cta-section",
                  },
                ],
              }}
              items={[
                {
                  heading: "Secondary subsection",
                  copy: `Consists of two paragraph lists and is used to provide information and links to additional destinations.`,
                  cta: {
                    copy: "More on CTA section",
                    type: "local",
                    href: "https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/cta-section",
                  },
                },
                {
                  heading: "Usage",
                  copy: `Use the secondary area to connect users to additional destinations if more than the primary is needed.`,
                  cta: {
                    copy: "More on Call-to-action",
                    type: "local",
                    href: "https://www.ibm.com/standards/web/carbon-for-ibm-dotcom/components/cta",
                  },
                },
              ]}
              heading="CTA Section"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo
            consequat"
            />
          </div>
        </div>
      </div>
    </ScrollAnimations>
    <DDSBackToTop />
  </>
);
export default WhiteThemeExample;
