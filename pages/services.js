/* eslint-disable sort-imports */
/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */
import "../styles/services.scss";

import { ArrowRight20 } from "@carbon/icons-react";

import {
  LeadSpace,
  TableOfContents,
  ContentBlockSegmented,
  Layout,
  ContentBlockMedia,
  LinkList,
} from "@carbon/ibmdotcom-react";

import React from "react";

/**
 * DDS patters template
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
        defaultSrc: "https://dummyimage.com/1056x480/ee5396/161616",
        alt: "Image alt text",
        sources: [
          {
            src: "https://dummyimage.com/320x370/ee5396/161616",
            breakpoint: "sm",
          },
          {
            src: "https://dummyimage.com/672x400/ee5396/161616",
            breakpoint: "md",
          },
        ],
      }}
    />
    <TableOfContents theme="white" menuLabel="Jump to" stickyOffset={48}>
      <a name="content-block-segmented" data-title="Content Block Segmented" />
      <ContentBlockSegmented
        heading="Content Block Segmented Title"
        copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien."
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
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 


            — Donec quis pretium odio, in dignissim sapien.`,
          },
          {
            heading: "Lorem ipsum doller",
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 

            
            — Donec quis pretium odio, in dignissim sapien.`,
          },
          {
            heading: "Lorem ipsum doller",
            copy: `
            — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. 

            — Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. 

            
            — Donec quis pretium odio, in dignissim sapien.`,
          },
        ]}
      />
      <Layout nested={true} type="2-1" border={false}>
        <div>
          <a name="content-block-Mmedia" data-title="Content Block Media" />
          <ContentBlockMedia
            heading="Content Block Media Title"
            items={[
              {
                mediaType: "video",
                heading: "Content Title",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam.",

                mediaData: {
                  videoId: "0_uka1msg4",
                  showCaption: true,
                },

                items: [
                  {
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  },
                ],
              },
              {
                mediaType: "video",
                heading: "Content Title",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam.",

                mediaData: {
                  videoId: "0_uka1msg4",
                  showCaption: true,
                },

                items: [
                  {
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  },
                ],
              },
              {
                mediaType: "video",
                heading: "Content Title",
                copy:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam.",

                mediaData: {
                  videoId: "0_uka1msg4",
                  showCaption: true,
                },

                items: [
                  {
                    copy:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  },
                ],
              },
            ]}
          />
          <LinkList
            heading="LinkList heading"
            style="vertical-end"
            items={[
              {
                heading: "heading link",
                type: "local",
                copy: "Lorem ipsum",
                cta: {
                  href: "https://www.ibm.com/services",
                },
              },
            ]}
          />
        </div>

        <> </>
      </Layout>
    </TableOfContents>
  </>
);
export default Services;
