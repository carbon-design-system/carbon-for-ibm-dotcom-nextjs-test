/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/dds.scss";

import {
  ContentBlockCards,
  ContentBlockSegmented,
  ContentBlockSimple,
  ContentGroupHorizontal,
  FeatureCard,
  HorizontalRule,
  LinkList,
  TableOfContents,
} from "@carbon/ibmdotcom-react";

import { ArrowRight20 } from "@carbon/icons-react";
import React from "react";

/**
 * DDS patterns template
 *
 * @returns {*} JSX for Learn template
 */
const dds = () => (
  <>
    <TableOfContents>
      <a name="section-1" data-title="Section - 1" />
      <ContentBlockSegmented
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        copy="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi tempus imperdiet. Ipsum suspendisse ultrices gravida dictum fusce ut. "
        mediaType="video"
        mediaData={{
          videoId: "0_uka1msg4",
          showCaption: true,
        }}
        items={[
          {
            heading: "Lorem ipsum dolor sit amet.",
            copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.
      
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
          },
        ]}
      />
      <LinkList
        heading="Ullamcorper sit amet risus nullam eget."
        style="vertical-end"
        items={[
          {
            type: "local",
            copy: "Rutrum quisque non tellus orci ac",
            cta: {
              href: "https://ibm.com",
            },
          },
          {
            type: "local",
            copy: "Rutrum quisque non tellus orci ac",
            cta: {
              href: "https://ibm.com",
            },
          },
          {
            type: "local",
            copy: "Rutrum quisque non tellus orci ac",
            cta: {
              href: "https://ibm.com",
            },
          },
        ]}
      />

      <HorizontalRule />

      <a name="section-2" data-title="Section - 2" />
      <ContentBlockSegmented
        heading="Pharetra pharetra massa massa ultricies mi quis."
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
      <FeatureCard
        card={{
          heading: "A scelerisque purus semper eget duis at tellus.",
          copy:
            "Elementum nibh tellus molestie nunc non. Habitant morbi tristique senectus et netus et malesuada fames.",
          cta: {
            href: "https://example.com",
            icon: {
              src: ArrowRight20,
            },
          },
          image: {
            defaultSrc: "https://dummyimage.com/600x600/ee5396/161616&text=1:1",
            alt: "Image alt text",
          },
        }}
      />

      <a name="section-3" data-title="Section - 3" />
      <ContentBlockSegmented
        heading="Pharetra pharetra massa massa ultricies mi quis."
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
        ]}
        cta={{
          cta: {
            href: "https://www.example.com",
            style: "card",
            type: "local",
            copy: "Lorem ipsum dolor",
          },
        }}
        mediaType="image"
      />

      <ContentBlockSimple
        heading="Curabitur malesuada varius mi eu posuere"
        copy="Lorem ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
            Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales
            nulla quis, *consequat* libero. Here are
            some common categories:
      
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
      
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
            "
        inverse={true}
        mediaType="video"
        mediaData={{
          videoId: "0_uka1msg4",
          showCaption: true,
        }}
      />

      <a name="section-4" data-title="Section - 4" />
      <ContentGroupHorizontal
        heading="Aliquam condimentum"
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

      <HorizontalRule />
      <a name="section-5" data-title="Section - 5" />
      <ContentBlockCards
        heading="Aliquam condimentum interdum"
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
    </TableOfContents>
  </>
);

export default dds;
