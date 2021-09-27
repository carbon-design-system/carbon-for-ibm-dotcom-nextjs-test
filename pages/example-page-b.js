/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
// import "../styles/example-page-b.scss";
import {
  CalloutQuote,
  CalloutWithMedia,
  ContentBlockCards,
  ContentBlockSegmented,
  ContentGroupHorizontal,
  CTASection,
  LeadSpaceBlock,
  LogoGrid,
  Layout,
  TableOfContents,
} from "@carbon/ibmdotcom-react";

import React from "react";

const contentBlockImages = {
  sources: [
    {
      src: "/images/320/fpo--16x9--320x180--003.jpg",
      breakpoint: 320,
    },
    {
      src: "/images/480/fpo--16x9--480x270--003.jpg",
      breakpoint: 400,
    },
    {
      src: "/images/720/fpo--16x9--720x405--003.jpg",
      breakpoint: 672,
    },
  ],
  alt: "Image alt text",
  defaultSrc: "/images/720/fpo--16x9--720x405--003.jpg",
};

/**
 * Solutions template
 *
 * @returns {*} JSX for Solution template
 */
const Solutions = () => (
  <>
    <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
      <a name="section-1" data-title="Lead Space Block" />
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

      <a name="section-2" data-title="Content Block Segmented" />
      <ContentBlockSegmented
        heading="Content Block Segmented"
        items={[
          {
            heading: "A scelerisque purus semper eget duis at tellus.",
            copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
            cta: {
              type: "local",
              copy: "Lorem Ipsum dolor sit",
              href: "https://example.com",
            },
          },
          {
            heading: "A scelerisque purus semper eget duis at tellus.",
            copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
          },
          {
            heading: "A scelerisque purus semper eget duis at tellus.",
            copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
            cta: {
              type: "local",
              copy: "Lorem Ipsum dolor sit",
              href: "https://example.com",
            },
          },
          {
            heading: "A scelerisque purus semper eget duis at tellus.",
            copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
          },
        ]}
      />

      <Layout nested={true} type="2-1" border={true}>
        <a name="section-3" data-title="Content Block Segmented (2)" />
        <ContentBlockSegmented
          heading="Content Block Segmented (2)"
          items={[
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              image: {
                heading: "Mauris iaculis eget dolor nec hendrerit.",
                image: contentBlockImages,
              },
              cta: {
                type: "local",
                copy: "Lorem Ipsum dolor sit",
                href: "https://example.com",
              },
            },
            {
              heading: "A scelerisque purus semper eget duis at tellus.",
              copy: "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
              image: {
                heading: "Mauris iaculis eget dolor nec hendrerit.",
                image: contentBlockImages,
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
      </Layout>

      <CalloutWithMedia
        mediaData={{
          videoId: "1_9h94wo6b",
          showCaption: true,
        }}
        mediaType="video"
        heading="Callout With Media"
        copy="Porttitor eget dolor morbi non arcu. Et ligula ullamcorper malesuada proin libero nunc consequat. In est ante in nibh mauris cursus mattis. Turpis tincidunt id aliquet risus feugiat in. Vel facilisis volutpat est velit egestas dui."
      />

      <a name="section-4" data-title="Content Group Horizontal" />
      <ContentGroupHorizontal
        heading="Content Group Horizontal"
        items={[
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
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
            copy: "Lorem ipsum dolor sit amet, _consectetur_ adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin.",
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
      <a name="section-5" data-title="Logo Grid" />
      <LogoGrid
        heading="Logo Grid"
        logosGroup={[
          {
            title: "Microsoft",
            imgSrc: "/images/logos/logo-microsoft.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
          {
            title: "Dell",
            imgSrc: "/images/logos/logo-dell.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
          {
            title: "Rabobank",
            imgSrc: "/images/logos/logo-rabobank.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
          {
            title: "Adobe",
            imgSrc: "/images/logos/logo-adobe.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
          {
            title: "US Bank",
            imgSrc: "/images/logos/logo-usbank.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
          {
            title: "Cisco",
            imgSrc: "/images/logos/logo-cisco.png",
            altText: "Image alt text",
            href: "http://example.com/",
          },
        ]}
        ctaCopy="Amet justo donec"
        ctaHref="https://www.example.com"
      />

      <a name="section-6" data-title="Content Block Cards" />
      <ContentBlockCards
        heading="Content Block Cards"
        cards={[
          {
            image: {
              defaultSrc: "/images/1312/fpo--1x1--1312x1312--001.jpg",
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
              defaultSrc: "/images/1312/fpo--4x3--1312x984--002.jpg",
              alt: "Image alt text",
            },
            eyebrow: "Blog",
            heading: "Natural language processing.",
            cta: {
              href: "https://www.example.com",
            },
          },
          {
            image: {
              defaultSrc: "/images/1312/fpo--2x1--1312x656--003.jpg",
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
      <a name="section-7" data-title="Callout Quote" />
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
    </TableOfContents>

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
                copy: "Dig into more self-directed learning about DevOps methodologies.",
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
        </div>
      </div>
    </div>
  </>
);
export default Solutions;
