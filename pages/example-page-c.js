/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
// import "../styles/example-page-c.scss";
import {
  CalloutWithMedia,
  ContentBlockCards,
  ContentBlockMedia,
  ContentBlockSegmented,
  ContentBlockHorizontal,
  CTASection,
  Layout,
  LeadSpace,
  TableOfContents,
} from "@carbon/ibmdotcom-react";
import { ArrowRight20 } from "@carbon/icons-react";
import React from "react";

/**
 * Services template
 *
 * @returns {*} JSX for Services template
 */
const Services = () => (
  <>
    <LeadSpace
      type="default"
      theme="g100"
      title="Leadspace title"
      copy="Use this area for a short line of copy to support the title"
      gradient={true}
      buttons={[
        {
          copy: "Lorem ipsum dolor",
          href: "https://www.ibm.com/services",
          renderIcon: ArrowRight20,
        },
      ]}
      image={{
        sources: [
          {
            src: "images/leadspace/fpo--leadspace--1584x560--003.jpg",
            breakpoint: "sm",
          },
          {
            src: "images/leadspace/fpo--leadspace--1584x560--003.jpg",
            breakpoint: "md",
          },
        ],
        defaultSrc: "images/leadspace/fpo--leadspace--1584x560--003.jpg",
        alt: "lead space image",
      }}
    />
    <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
      <Layout nested={true} type="2-1" border={true}>
        <a
          name="content-block-segmented"
          data-title="Content Block Segmented"
        />
        <ContentBlockSegmented
          heading="Content Block Segmented Title"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque
        diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et,
        tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim
        sapien."
          cta={{
            style: "card",
            type: "local",
            copy: "Services",
            cta: {
              href: "https;//www.ibm.com/services",
            },
          }}
          items={[
            {
              heading: "Lorem ipsum doller",
              copy: `— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.`,
            },
            {
              heading: "Lorem ipsum doller",
              copy: `— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.`,
            },
            {
              heading: "Lorem ipsum doller",
              copy: `— Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
              — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.`,
            },
          ]}
        />
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <a name="content-block-media" data-title="Content Block Media" />
        <ContentBlockMedia
          heading="Content Block Media Title"
          items={[
            {
              mediaType: "video",
              heading: "Content Title",
              copy:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id " +
                "pellentesque diam.",
              mediaData: {
                videoId: "1_9h94wo6b",
                showCaption: true,
              },
              items: [
                {
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ],
            },
            {
              mediaType: "video",
              heading: "Content Title",
              copy:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id " +
                "pellentesque diam.",
              mediaData: {
                videoId: "1_9h94wo6b",
                showCaption: true,
              },
              items: [
                {
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ],
            },
            {
              mediaType: "video",
              heading: "Content Title",
              copy:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id " +
                "pellentesque diam.",
              mediaData: {
                videoId: "1_9h94wo6b",
                showCaption: true,
              },
              items: [
                {
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
              ],
            },
          ]}
        />
      </Layout>
      <CalloutWithMedia
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        heading="Callout With Media heading"
        mediaType="video"
        mediaData={{
          videoId: "1_9h94wo6b",
          showCaption: true,
        }}
      />

      <Layout nested={true} type="2-1" border={true}>
        <a name="content-block-cards" data-title="Content Block Cards" />
        <ContentBlockCards
          heading="Content Block Cards"
          cards={[
            {
              image: {
                defaultSrc: "images/1312/fpo--1x1--1312x1312--001.jpg",
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
                defaultSrc: "images/1312/fpo--4x3--1312x984--002.jpg",
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
                defaultSrc: "images/1312/fpo--2x1--1312x656--003.jpg",
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
                defaultSrc: "images/1312/fpo--16x9--1312x738--005.jpg",
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
                defaultSrc: "images/1312/fpo--3x2--874--004.jpg",
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
      </Layout>

      <a
        name="content-block-horizontal"
        data-title="Content Block Horizontal"
      />
      <ContentBlockHorizontal
        heading="Content Block Horizontal"
        items={[
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
            cta: {
              items: [
                {
                  type: "local",
                  copy: "Lorem ipsum",
                  cta: {
                    href: "https://example.com",
                  },
                },
                {
                  type: "video",
                  copy: "External link text",
                  media: {
                    src: "1_9h94wo6b",
                    type: "video",
                  },
                },
              ],
            },
          },
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
            cta: {
              items: [
                {
                  type: "local",
                  copy: "Lorem ipsum",
                  cta: {
                    href: "https://example.com",
                  },
                },
              ],
            },
          },
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
            cta: {
              items: [
                {
                  type: "local",
                  copy: "Lorem ipsum dolor sit amet",
                  cta: {
                    href: "https://example.com",
                  },
                },
                {
                  type: "local",
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                  cta: {
                    href: "https://example.com",
                  },
                },
              ],
            },
          },
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
            cta: {
              items: [
                {
                  type: "local",
                  copy: "Lorem ipsum",
                  cta: {
                    href: "https://example.com",
                  },
                },
              ],
            },
          },
          {
            eyebrow: "Lorem ipsum",
            heading: "Aliquam condimentum",
            copy: "Lorem ipsum dolor sit amet, _consectetur_ sellus at elit sollicitudin.",
            cta: {
              items: [
                {
                  type: "local",
                  copy: "Lorem ipsum dolor",
                  cta: {
                    href: "https://example.com",
                  },
                },
                {
                  type: "download",
                  copy: "Lorem ipsum dolor sit amet",
                  cta: {
                    href: "https://example.com",
                  },
                },
              ],
            },
          },
        ]}
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
                  copy: ["Lorem ipsum"],
                },
              ],
            }}
            items={[{}]}
            heading="CTA Section"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo
            consequat"
          />
        </div>
      </div>
    </div>
  </>
);
export default Services;
