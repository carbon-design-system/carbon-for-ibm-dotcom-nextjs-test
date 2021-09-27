/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/example-page-a.scss";
import { Desktop, Pattern, Touch } from "@carbon/pictograms-react";
import {
  TableOfContents,
  LeadSpace,
  Layout,
  ContentBlockMedia,
  LinkList,
  ContentBlockMixed,
  ContentBlockSegmented,
  ContentBlockSimple,
  CardSectionImages,
  CardSectionSimple,
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
 * Learn template
 *
 * @returns {*} JSX for Learn template
 */
const Learn = () => (
  <>
    <LeadSpace
      type="centered"
      theme="g100"
      title="Lead space title"
      copy="Use this area for a short line of copy to support the title"
      gradient={true}
      image={{
        sources: [
          {
            src: "/images/leadspace/fpo--leadspace--1584x560--003.jpg",
            breakpoint: "sm",
          },
          {
            src: "/images/leadspace/fpo--leadspace--1584x560--003.jpg",
            breakpoint: "md",
          },
        ],
        defaultSrc: "/images/leadspace/fpo--leadspace--1584x560--003.jpg",
        alt: "lead space image",
      }}
    />
    <TableOfContents menuLabel="Jump to" theme="white" stickyOffset={48}>
      <a name="content-block-mixed" data-title="Content Block - Mixed Groups" />
      <ContentBlockMixed
        heading="Content Block - Mixed Groups"
        copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero."
        cta={{
          cta: {
            href: "https://www.example.com",
          },
          style: "card",
          type: "local",
          copy: "Lorem ipsum dolor sit ametttt",
        }}
        items={[
          {
            type: "ContentGroupCards",
            heading: "Content Group - with Cards",
            items: [
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet",
                cta: {
                  href: "https://www.example.com",
                },
              },
              {
                heading:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
                cta: {
                  href: "https://www.example.com",
                },
              },
            ],
          },
          {
            type: "ContentGroupPictograms",
            heading: "Content Group - with Pictograms",
            items: [
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Desktop,
                  "aria-label": "Desktop",
                },
              },
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Pattern,
                  "aria-label": "Pattern",
                },
              },
              {
                heading: "Aliquam condimentum interdum",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
                cta: {
                  href: "https://www.example.com",
                  type: "local",
                  copy: "Lorem ipsum dolor",
                },
                pictogram: {
                  src: Touch,
                  "aria-label": "Touch",
                },
              },
            ],
          },
          {
            type: "ContentGroupSimple",
            mediaType: "image",
            mediaData: {
              heading: "Lorem ipsum dolor sit amet.",
              image: contentBlockImages,
            },
            heading: "Content Group - Simple",
            items: [
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
              {
                heading: "Lorem ipsum dolor sit amet.",
                copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
              },
            ],
          },
        ]}
        aside={{
          items: (
            <LinkList
              style="card"
              heading="Tutorials"
              items={[
                {
                  type: "local",
                  copy: "Containerization A Complete Guide",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
                {
                  type: "external",
                  copy: "Why should you use microservices and containers",
                  cta: {
                    href: "https://ibm.com",
                  },
                },
              ]}
            />
          ),
          border: false,
        }}
      />
      <Layout nested={true} type="2-1" border={true}>
        <a
          name="content-block-segmented"
          data-title="Content Block - Segmented"
        />
        <ContentBlockSegmented
          heading="Content Block - Segmented"
          copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit."
          mediaType="image"
          mediaData={{
            heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: contentBlockImages,
          }}
          items={[
            {
              heading: "Lorem ipsum dolor sit amet.",
              copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.",
            },
            {
              heading: "Lorem ipsum dolor sit amet.",
              copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit.",
            },
          ]}
          cta={{
            cta: {
              href: "https://www.example.com",
            },
            style: "card",
            type: "local",
            copy: "Lorem ipsum dolor",
          }}
        />
      </Layout>
      <Layout nested={true} type="2-1" border={true}>
        <a name="content-block-simple" data-title="Content Block - Simple" />
        <ContentBlockSimple
          inverse={false}
          heading="Content Block - Simple"
          copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
          Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
          nulla quis, *consequat* libero. Here are
          some common categories:

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero."
          mediaType="image"
          mediaData={{
            heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: {
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
            },
          }}
          cta={{
            cta: {
              href: "https://www.ibm.com",
            },
            style: "card",
            type: "external",
            copy: "Lorem ipsum dolor sit ametttt",
          }}
        />
      </Layout>
      <Layout nested={true} type="2-1">
        <a name="content-block-media" data-title="Content Block - with Media" />
        <ContentBlockMedia
          copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean
              et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at
              elit sollicitudin, sodales nulla quis, *consequat* libero. Phasellus at
              elit sollicitudin, sodales nulla quis, consequat."
          heading="Content Block - with Media"
          items={[
            {
              mediaType: "image",
              mediaData: {
                heading: "Lorem ipsum dolor sit amet.",
                image: {
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
                },
              },
              heading: "Lorem ipsum dolor sit amet",
              items: [
                {
                  heading: "Lorem ipsum dolor sit amet.",
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                },
                {
                  heading: "Lorem ipsum dolor sit amet.",
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                },
              ],
              cta: {
                cta: {
                  href: "https://www.example.com",
                },
                style: "card",
                type: "local",
                heading: "Lorem ipsum dolor sit ametttt",
              },
            },
            {
              mediaType: "image",
              mediaData: {
                heading: "Lorem ipsum dolor sit amet.",
                image: {
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
                },
              },
              heading: "Lorem ipsum dolor sit amet",
              items: [
                {
                  heading: "Lorem ipsum dolor sit amet.",
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                },
                {
                  heading: "Lorem ipsum dolor sit amet.",
                  copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.",
                },
              ],
              cta: {
                cta: {
                  href: "https://www.example.com",
                },
                style: "card",
                type: "local",
                heading: "Lorem ipsum dolor sit ametttt",
              },
            },
          ]}
          cta={{
            heading: "Feature Card",
            card: {
              type: "local",
              heading: "Consectetur adipisicing elit",
              image: {
                defaultSrc: "/images/720/fpo--1x1--720x720--003.jpg",
                alt: "Image alt text",
              },
              cta: {
                href: "https://www.example.com",
              },
            },
          }}
        />
      </Layout>
    </TableOfContents>

    <CardSectionImages
      heading="Card Section - with Images"
      theme="g10"
      cards={[
        {
          image: {
            defaultSrc: "/images/1312/fpo--16x9--1312x738--005.jpg",
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
            defaultSrc: "/images/1312/fpo--1x1--1312x1312--001.jpg",
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
        {
          image: {
            defaultSrc: "/images/1312/fpo--3x2--874--004.jpg",
            alt: "Image alt text",
          },
          eyebrow: "Blog",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          image: {
            defaultSrc: "/images/1312/fpo--4x3--1312x984--002.jpg",
            alt: "Image alt text",
          },
          eyebrow: "Topic",
          heading:
            "Serving society ethically in the age of Artificial Intelligence.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
    />

    <CardSectionSimple
      heading="Card Section - Simple"
      theme="g10"
      cards={[
        {
          heading: "Nunc convallis lobortis",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Fusce gravida eu arcu",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Interdum et malesuada",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis loborti",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
        {
          heading: "Nunc convallis lbortis",
          copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.",
          cta: {
            href: "https://www.example.com",
          },
        },
      ]}
      cta={{
        heading: "Top level card link",
        cta: {
          href: "https://www.example.com",
        },
      }}
    />
  </>
);

export default Learn;
