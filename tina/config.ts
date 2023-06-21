import { defineConfig } from "tinacms";
// import { attach_sponsorFields } from "./templates";
// import { authorFields } from "./templates";
// import { banner_pageFields } from "./templates";
// import { content_blockFields } from "./templates";
// import { customise_formFields } from "./templates";
// import { page___event_largeFields } from "./templates";
// import { page___eventFields } from "./templates";
// import { factFields } from "./templates";
// import { formsFields } from "./templates";
// import { gallery_blockFields } from "./templates";
// import { inputFields } from "./templates";
// import { links_blockFields } from "./templates";
// import { pageFields } from "./templates";
// import { sponsorFields } from "./templates";
// import { staffFields } from "./templates";
// import { testimonial_blockFields } from "./templates";
// import { text_blockFields } from "./templates";
// import { video_blockFields } from "./templates";

import { metaDataFields } from "./templates/fields";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  clientId: process.env.TINA_CLIENT_ID!,
  branch:
    process.env.TINA_BRANCH! || // custom branch env override
    // process.env.VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
    // loadCustomStore: async () => {},
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Home Page",
        name: "home_page",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          ...metaDataFields,
          // ...content_blockFields(),
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Programs and Activities",
        name: "programs_and_activities",
        path: "content/programs-activities",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          ...metaDataFields,
          // ...pageFields()
        ],
      },
      // {
      //   format: "md",
      //   label: "Therapeutic Services",
      //   name: "therapeutic_services",
      //   path: "content/therapeutic-services",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Our Services",
      //   name: "our_services",
      //   path: "content/services",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "About Us",
      //   name: "about_us",
      //   path: "content/about-us",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: ["**/*"],
      //     exclude: ["staff/[a-z]*"], //TODO: add to page groups
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Staff",
      //   name: "staff",
      //   path: "content/about-us/staff",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "**/*",
      //     exclude: "*index",
      //   },
      //   fields: [...staffFields()],
      // },
      // {
      //   format: "md",
      //   label: "Functions & Events",
      //   name: "functions___events",
      //   path: "content/functions-events",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "*",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Upcoming Events",
      //   name: "events",
      //   path: "content/functions-events/upcoming-events",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "*",
      //     exclude: "_index",
      //   },
      //   fields: [
      //     ...page___event_largeFields(),
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body of Document",
      //       description: "This is the markdown body",
      //       isBody: true,
      //     },
      //   ],
      // },
      // {
      //   format: "md",
      //   label: "Support",
      //   name: "support",
      //   path: "content/support",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: ["**/*"],
      //     exclude: [
      //       "sponsor-a-member/[a-z]*",
      //       "sponsor-an-animal/[a-z]*",
      //       "sponsor-a-program/[a-z]*",
      //     ],
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Social Enterprises",
      //   name: "social_enterprise",
      //   nameOverride: "social-enterprise",
      //   path: "content/social-enterprise",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     include: "**/*",
      //   },
      //   fields: [...pageFields()],
      // },
      // //   #################################### SINGLE PAGES
      // {
      //   format: "md",
      //   label: "------ SINGLE PAGES",
      //   name: "blank",
      //   path: "content/blank",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   match: {
      //     exclude: "**/*",
      //   },
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   fields: [
      //     {
      //       type: "string",
      //       name: "blank",
      //       label: "black",
      //       description: "This is a line seperator",
      //     },
      //   ],
      // },
      // {
      //   format: "md",
      //   label: "Contact Us",
      //   name: "contact",
      //   path: "content",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "contact",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Donations",
      //   name: "donations",
      //   path: "content",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "donations",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Become a member",
      //   name: "become_a_member",
      //   nameOverride: "become-a-member",
      //   path: "content",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "become-a-member",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Newsletter",
      //   name: "newsletter",
      //   // nameOverride: 'become-a-member',
      //   path: "content",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "newsletter",
      //   },
      //   fields: [...pageFields()],
      // },
      // {
      //   format: "md",
      //   label: "Program Timetable",
      //   name: "program_timetable",
      //   nameOverride: "program-timetable",
      //   path: "content",
      //   frontmatterFormat: "toml",
      //   frontmatterDelimiters: "+++",
      //   ui: {
      //     allowedActions: {
      //       create: false,
      //       delete: false,
      //     },
      //   },
      //   match: {
      //     include: "program-timetable",
      //   },
      //   fields: [...pageFields()],
      // },
    ],
  },
});
