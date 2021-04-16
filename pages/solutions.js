/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/solutions.scss";
import {
  CalloutQuote,
  CalloutWithMedia,
  ContentBlockCards,
  ContentBlockSegmented,
  ContentGroupHorizontal,
  CTASection,
  LeadSpaceBlock,
  LogoGrid,
  FeatureCardBlockLarge,
  ScrollAnimations,
  TableOfContents,
} from "@carbon/ibmdotcom-react";

import { ArrowRight20 } from "@carbon/icons-react";
import React from "react";

const selectorTargets = `
  .bx--content-block__heading,
  .bx--content-block__copy,
  .bx--leadspace-block__media,
  .bx--link-list,
  .bx--leadspace-block__cta,
  .bx--feature-card-block-large,
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
  .bx--content-item
`;

/**
 * Solutions template
 *
 * @returns {*} JSX for Solution template
 */
const Solutions = () => (
  <>
    <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
      <a name="section-1" data-title="Lead Space Block" />
      <ScrollAnimations keepAnimations={true} selectorTargets={selectorTargets}>
        <LeadSpaceBlock
          title="Lead Space Block"
          copy="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          heading="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          mediaType="video"
          mediaData={{
            videoId: "0_uka1msg4",
            showDescription: true,
          }}
          items={{
            heading: "Featured products",
            items: [
              {
                type: "local",
                copy: "IBM Cloud Continuous Delivery",
                cta: {
                  href: "https://ibm.com",
                },
              },
              {
                type: "local",
                copy: "UrbanCode",
                cta: {
                  href: "https://ibm.com",
                },
              },
              {
                type: "local",
                copy: "View all products",
                cta: {
                  href: "https://ibm.com",
                },
              },
            ],
          }}
          cta={{
            style: "button",
            type: "local",
            buttons: [
              {
                type: "local",
                copy: "Excepteur sint occaecat",
                href: "https://example.com/",
              },
            ],
          }}
        />
      </ScrollAnimations>

      <a name="section-2" data-title="Content Block Segmented" />
      <ScrollAnimations
        animation={"slide-left"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <ContentBlockSegmented
          heading="Content Block Segmented"
          items={[
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              cta: {
                type: "local",
                copy: "Lorem Ipsum dolor sit",
                href: "https://example.com",
              },
            },
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
            },
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              cta: {
                type: "local",
                copy: "Lorem Ipsum dolor sit",
                href: "https://example.com",
              },
            },
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
            },
          ]}
        />
      </ScrollAnimations>

      <ScrollAnimations
        animation={"slide-up-left"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <FeatureCardBlockLarge
          eyebrow="scelerisque purus"
          heading="Feature Card Block Large"
          copy="Habitant morbi tristique senectus et netus et malesuada fames. Habitant morbi tristique."
          cta={{
            href: "https://example.com",
            icon: {
              src: ArrowRight20,
            },
          }}
          image={{
            sources: [
              {
                src: "https://dummyimage.com/320x160/ee5396/161616&text=2:1",
                breakpoint: "sm",
              },
              {
                src: "https://dummyimage.com/400x200/ee5396/161616&text=2:1",
                breakpoint: "md",
              },
              {
                src: "https://dummyimage.com/600x600/ee5396/161616&text=1:1",
                breakpoint: 991,
              },
              {
                src: "https://dummyimage.com/600x300/ee5396/161616&text=2:1",
                breakpoint: "lg",
              },
              {
                src: "https://dummyimage.com/672x672/ee5396/161616&text=1:1",
                breakpoint: "xlg",
              },
            ],
            defaultSrc: "https://dummyimage.com/600x600/ee5396/161616&text=1:1",
            alt: "Image alt text",
          }}
        />
      </ScrollAnimations>

      <a name="section-3" data-title="Content Block Segmented (2)" />
      <ScrollAnimations
        animation={"slide-down-left"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <ContentBlockSegmented
          heading="Content Block Segmented (2)"
          items={[
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              image: {
                heading: "Mauris iaculis eget dolor nec hendrerit.",
                image: {
                  sources: [
                    {
                      src:
                        "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                      breakpoint: 320,
                    },
                    {
                      src:
                        "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                      breakpoint: 400,
                    },
                    {
                      src:
                        "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                      breakpoint: 672,
                    },
                  ],
                  alt: "Image alt text",
                  defaultSrc:
                    "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                },
              },
              cta: {
                type: "local",
                copy: "Lorem Ipsum dolor sit",
                href: "https://example.com",
              },
            },
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy:
                "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              image: {
                heading: "Mauris iaculis eget dolor nec hendrerit.",
                image: {
                  sources: [
                    {
                      src:
                        "https://dummyimage.com/320x180/ee5396/161616&text=16:9",
                      breakpoint: 320,
                    },
                    {
                      src:
                        "https://dummyimage.com/400x225/ee5396/161616&text=16:9",
                      breakpoint: 400,
                    },
                    {
                      src:
                        "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                      breakpoint: 672,
                    },
                  ],
                  alt: "Image alt text",
                  defaultSrc:
                    "https://dummyimage.com/672x378/ee5396/161616&text=16:9",
                },
              },
            },
          ]}
          cta={{
            style: "card",
            disableImage: true,
            type: "video",
            media: {
              src: "1_sf5ovm7u",
              type: "video",
            },
          }}
          mediaType="image"
        />
      </ScrollAnimations>

      <ScrollAnimations
        animation={"slide-down"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <CalloutWithMedia
          heading="Callout With Media"
          copy="Porttitor eget dolor morbi non arcu. Et ligula ullamcorper malesuada proin libero nunc consequat. In est ante in nibh mauris cursus mattis. Turpis tincidunt id aliquet risus feugiat in. Vel facilisis volutpat est velit egestas dui."
          mediaType="video"
          mediaData={{
            videoId: "1_v1z55w0b",
            showCaption: true,
          }}
        />
      </ScrollAnimations>

      <a name="section-4" data-title="Content Group Horizontal" />

      <ScrollAnimations
        animation={"slide-down-right"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <ContentGroupHorizontal
          heading="Content Group Horizontal"
          items={[
            {
              eyebrow: "Lorem ipsum",
              heading: "Aliquam condimentum",
              copy:
                "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
              cta: {
                items: [
                  {
                    type: "local",
                    copy: "Link text",
                    href: "https://example.com",
                  },
                  {
                    type: "external",
                    copy: "External link text",
                    href: "https://example.com",
                  },
                ],
              },
            },
            {
              eyebrow: "Lorem ipsum",
              heading: "Aliquam condimentum",
              copy:
                "Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.",
              cta: {
                items: [
                  {
                    type: "local",
                    copy: "Link text",
                    href: "https://example.com",
                  },
                  {
                    type: "external",
                    copy: "External link text",
                    href: "https://example.com",
                  },
                ],
              },
            },
          ]}
        />
      </ScrollAnimations>

      <a name="section-5" data-title="Logo Grid" />
      <ScrollAnimations
        animation={"slide-up"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <LogoGrid
          heading="Logo Grid"
          logosGroup={[
            {
              title: "Company A",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
            {
              title: "Company B",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
            {
              title: "Company C",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
            {
              title: "Company D",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
            {
              title: "Company E",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
            {
              title: "Company F",
              imgSrc: "https://dummyimage.com/140x140",
              altText: "Image alt text",
              href: "http://example.com/",
            },
          ]}
          ctaCopy="Amet justo donec"
          ctaHref="https://www.example.com"
        />
      </ScrollAnimations>

      <a name="section-6" data-title="Content Block Cards" />
      <ScrollAnimations
        animation={"slide-down-right"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <ContentBlockCards
          heading="Content Block Cards"
          cards={[
            {
              image: {
                defaultSrc:
                  "https://dummyimage.com/1056x792/ee5396/161616%26text=4:3",
                alt: "Image alt text",
              },
              eyebrow: "Topic",
              heading: "Natural language processing.",
              cta: {
                href: "https://www.example.com",
              },
            },
            {
              image: {
                defaultSrc:
                  "https://dummyimage.com/1056x792/ee5396/161616%26text=4:3",
                alt: "Image alt text",
              },
              eyebrow: "Topic",
              heading: "Natural language processing.",
              cta: {
                href: "https://www.example.com",
              },
            },
            {
              image: {
                defaultSrc:
                  "https://dummyimage.com/1056x792/ee5396/161616%26text=4:3",
                alt: "Image alt text",
              },
              eyebrow: "Topic",
              heading: "Natural language processing.",
              cta: {
                href: "https://www.example.com",
              },
            },
          ]}
        />
      </ScrollAnimations>
      <a name="section-7" data-title="Callout Quote" />
      <ScrollAnimations
        animation={"slide-right"}
        keepAnimations={true}
        selectorTargets={selectorTargets}
      >
        <CalloutQuote
          quote={{
            copy: "Callout Quote: Duis aute irure dolor in reprehenderit",
            source: {
              heading: "Lorem ipsum",
              copy: "dolor sit amet",
            },
            cta: {
              copy: "Link with Icon",
              type: "local",
              href: "https://example.com",
            },
          }}
        />
      </ScrollAnimations>
    </TableOfContents>

    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-12 bx--offset-lg-4">
          <ScrollAnimations
            animation={"slide-up-right"}
            keepAnimations={true}
            selectorTargets={selectorTargets}
          >
            <CTASection
              theme="white"
              cta={{
                style: "button",
                type: "local",
                buttons: [
                  {
                    type: "local",
                    copy: "Contact sales",
                    href: "https://example.com/",
                  },
                ],
              }}
              items={[
                {
                  heading: "Get connected",
                  copy: `IBM DevOps partners have a wide range of expertise.
                  Find one to build the right solution for you.`,
                  cta: {
                    copy: "Find a partner",
                    type: "local",
                    href: "https://example.com/",
                  },
                },
                {
                  heading: "Learn how",
                  copy:
                    "Dig into more self-directed learning about DevOps methodologies.",
                  cta: {
                    copy: "Browse tutorials",
                    type: "local",
                    href: "https://example.com/",
                  },
                },
              ]}
              heading="CTA Section"
              copy="Want to discuss your options with a DevOps expert? Contact our sales team to evaluate your needs."
            />
          </ScrollAnimations>
        </div>
      </div>
    </div>
  </>
);
export default Solutions;
