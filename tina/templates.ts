import { GroupListFieldPlugin, type TinaField } from "tinacms";
// import { sponsors } from './__generated__/content'
import { hiddenComponent, maxChars } from "./utils/client";
export function attach_sponsorFields() {
  return [
    // {
    //   type: 'string',
    //   name: 'sponsors',
    //   label: 'Sponsor',
    //   list: true,
    //   field: {
    //     component: 'select',
    //     options: sponsors,
    //   },
    //   description: 'Attach a sponsor to this item to promote their support',
    // },
  ] as TinaField[];
}
export function authorFields() {
  return [] as TinaField[];
}
export function banner_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title of Banner",
      required: true,
    },
    {
      type: "image",
      name: "src",
      label: "Banner Image",
    },
    {
      type: "string",
      name: "ratio",
      label: "Image Size",
      options: ["4by3", "16x9", "1by1"],
    },
    {
      type: "string",
      name: "href",
      label: "Add URL",
    },
  ] as TinaField[];
}
export function content_blockFields() {
  return [
    {
      type: "string",
      name: "overline",
      label: "Overline",
      description: "Keyworded Group",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
      description: "Try an use an action statement for most impact",
    },
    {
      type: "string",
      name: "subheading",
      label: "Sub Heading",
      description: "Supporting the heading.",
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      description: "Summarise the content",
      ui: {
        component: "textarea",
      },
    },
    // {
    //   type: "rich-text",
    //   name: "content",
    //   label: "Content",
    //   description: "Free range content",
    // },
    {
      type: "image",
      name: "src",
      label: "Add Image",
      description: "Image Credits",
    },
    {
      type: "string",
      name: "credit",
      label: "Image Credits",
    },
    {
      type: "boolean",
      name: "enableCTA",
      label: "Add Links",
    },
    {
      type: "object",
      name: "cta",
      label: "Insert Links",
      list: true,
      fields: [...links_blockFields()],
      ui: {
        component(props) {
          return hiddenComponent(
            props,
            "enableCTA",
            GroupListFieldPlugin.Component
          );
        },
      },
    },
    {
      type: "image",
      name: "logoSrc",
      label: "Add Logo or Icon",
      description:
        "Add a logo or an icon which will display as a smaller thumbnail",
    },
  ] as TinaField[];
}
export function content_blockFieldsNoHTML() {
  return [
    {
      type: "string",
      name: "overline",
      label: "Overline",
      description: "Keyworded Group",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
      description: "Try an use an action statement for most impact",
    },
    {
      type: "string",
      name: "subheading",
      label: "Sub Heading",
      description: "Supporting the heading.",
    },
    {
      type: "string",
      name: "summary",
      label: "Summary",
      description: "Summarise the content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "src",
      label: "Add Image",
      description: "Image Credits",
    },
    {
      type: "string",
      name: "credit",
      label: "Image Credits",
    },
    {
      type: "boolean",
      name: "enableCTA",
      label: "Add Links",
    },
    {
      type: "object",
      name: "cta",
      label: "Insert Links",
      list: true,
      fields: [...links_blockFields()],
      ui: {
        component(props) {
          return hiddenComponent(
            props,
            "enableCTA",
            GroupListFieldPlugin.Component
          );
        },
      },
    },
    {
      type: "image",
      name: "logoSrc",
      label: "Add Logo or Icon",
      description:
        "Add a logo or an icon which will display as a smaller thumbnail",
    },
  ] as TinaField[];
}
export function customise_formFields() {
  return [
    {
      type: "string",
      name: "form",
      label: "Choose Form",
      options: [
        "become-a-member",
        "contact",
        "sponsorship",
        "donate",
        "subscribe",
        "raffles",
      ],
      required: true,
    },
    {
      type: "string",
      name: "heading",
      label: "Update Heading",
      description: "Customise the heading of the form",
    },
    {
      type: "string",
      name: "summary",
      label: "Update Summary",
      description: "Customise the summary of the form",
    },
  ] as TinaField[];
}
export function page___event_largeFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Event Title",
      required: true,
      isTitle: true,
    },
    {
      type: "string",
      name: "description",
      label: "Event Summary",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "src",
      label: "Add Event Image",
    },
    {
      type: "datetime",
      name: "startDate",
      label: "Event Start Date",
    },
    {
      type: "datetime",
      name: "endDate",
      label: "endDate",
    },
    {
      type: "boolean",
      name: "enableCTA",
      label: "Link to Website",
      description:
        "Enable this feature if there are tickets for sale or they need to register for the event via another website.",
    },
    {
      type: "object",
      name: "cta",
      label: "Add Links",
      list: true,
      fields: [...links_blockFields()],
      ui: {
        component(props) {
          return hiddenComponent(
            props,
            "enableCTA",
            GroupListFieldPlugin.Component
          );
        },
      },
    },
  ] as TinaField[];
}
export function page___eventFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Event Title",
      required: true,
      isTitle: true,
      description: "Title of Event",
    },
    {
      type: "string",
      name: "description",
      label: "Short Summary of Event",
      ui: {
        component: "textarea",
      },
      required: true,
      description: "Displayed in SEO Searches and in Page Headers",
    },
    ...content_blockFields(),
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Add Block",
      name: "blocks",
      templates: [
        {
          fields: content_blockFields(),
          label: "Content Block",
          name: "content_block",
          nameOverride: "content-block",
        },
        {
          fields: attach_sponsorFields(),
          label: "Attach Sponsor",
          name: "attach_sponsor",
          nameOverride: "attach-sponsor",
        },
        {
          fields: testimonial_blockFields(),
          label: "Testimonial Block",
          name: "testimonial",
        },
        {
          fields: factFields(),
          label: "Fact",
          name: "fact",
        },
        {
          fields: gallery_blockFields(),
          label: "Gallery Block",
          name: "gallery",
        },
        {
          fields: video_blockFields(),
          label: "Video Block",
          name: "video_block",
          nameOverride: "video-block",
        },
        {
          fields: text_blockFields(),
          label: "Text Block",
          name: "text_block",
          nameOverride: "text-block",
        },
      ],
    },
  ] as TinaField[];
}
export function factFields() {
  return [
    {
      type: "rich-text",
      name: "content",
      label: "Fact",
      description: "Add a fun fact",
      required: true,
    },
  ] as TinaField[];
}
export function formsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Form Name",
      description: "Name of the Form",
    },
    {
      type: "rich-text",
      name: "description",
      label: "Form Description",
    },
    {
      type: "object",
      name: "section",
      label: "Form Sections",
      list: true,
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Section Title",
        },
        {
          type: "rich-text",
          name: "description",
          label: "Section Description",
        },
        {
          type: "object",
          name: "input",
          label: "Add input fields",
          list: true,
          fields: [...inputFields()],
        },
      ],
    },
    {
      type: "object",
      name: "message",
      label: "Form Submitted Message",
      fields: [
        {
          type: "string",
          name: "heading",
          label: "Submitted Heading",
        },
        {
          type: "rich-text",
          name: "content",
          label: "Submission Message",
        },
      ],
    },
  ] as TinaField[];
}
export function gallery_blockFields() {
  return [
    {
      type: "image",
      name: "srcs",
      label: "Gallery",
      list: true,
      description: "Upload photos to create a gallery of images",
    },
  ] as TinaField[];
}
export function inputFields() {
  return [
    {
      type: "string",
      name: "label",
      label: "Field Label",
      required: true,
    },
    {
      type: "string",
      name: "name",
      label: "Name of input",
      required: true,
      description:
        'short name for the field. ie "First Name" Or "Email Address"',
    },
    {
      type: "string",
      name: "type",
      label: "Type of field",
      options: ["text", "textarea", "select", "radio", "checkbox"],
      required: true,
    },
    {
      type: "string",
      name: "placeholder",
      label: "Placeholder",
    },
    {
      type: "boolean",
      name: "isRequired",
      label: "Is field mandatory?",
    },
  ] as TinaField[];
}
export function links_blockFields() {
  return [
    {
      type: "string",
      name: "href",
      label: "Add URL",
      required: true,
      description: "Paste the FULL URL to connect to",
    },
    {
      type: "string",
      name: "text",
      label: "Add Text for the link",
      required: true,
    },
    {
      type: "string",
      name: "icon",
      label: "icon",
    },
    {
      type: "string",
      name: "class",
      label: "class",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
      description: "Title of Page",
    },
    {
      type: "string",
      name: "description",
      label: "Short Summary of Page",
      description: "Displayed in SEO Searches and in Page Headers",
      ui: {
        component: "textarea",
        validate: maxChars(300),
      },
      required: true,
    },
    ...content_blockFieldsNoHTML(),
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Add Block",
      name: "blocks",
      templates: [
        {
          fields: content_blockFields(),
          label: "Content Block",
          name: "content_block",
          nameOverride: "content-block",
        },
        {
          fields: attach_sponsorFields(),
          label: "Attach Sponsor",
          name: "attach_sponsor",
          nameOverride: "attach-sponsor",
        },
        {
          fields: testimonial_blockFields(),
          label: "Testimonial Block",
          name: "testimonial",
        },
        {
          fields: factFields(),
          label: "Fact",
          name: "fact",
        },
        {
          fields: gallery_blockFields(),
          label: "Gallery Block",
          name: "gallery",
        },
        {
          fields: video_blockFields(),
          label: "Video Block",
          name: "video_block",
          nameOverride: "video-block",
        },
      ],
    },
    {
      type: "boolean",
      name: "customiseForm",
      label: "Customise Form on Page",
    },
    {
      type: "object",
      name: "form",
      label: "form",
      fields: [...customise_formFields()],
      //   ui: {
      //     component(props) {
      //       return hiddenComponent(props, 'customiseForm', GroupListFieldPlugin.Component)
      //     },
      //   },
    },
  ] as TinaField[];
}
export function sponsorFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Company Name",
      required: true,
    },
    {
      type: "string",
      name: "subheading",
      label: "Sub Heading",
    },
    {
      type: "string",
      name: "description",
      label: "Summary",
      required: true,
      description: "Quick Summary of the business",
    },
    {
      type: "image",
      name: "src",
      label: "Upload Logo",
    },
    {
      type: "object",
      name: "cta",
      label: "Add Links to their Website",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "text",
          required: true,
        },
        {
          type: "string",
          name: "href",
          label: "href",
          required: true,
        },
      ],
    },
    {
      type: "string",
      name: "content",
      label: "Add more information if required",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "sponsorship",
      label: "Business Sponsorship",
      list: true,
      options: ["sunshine-butterflies", "walk-in-wings", "sunshine-gardens"],
      description: "Select the brands or businesses the business sponsors",
    },
  ] as TinaField[];
}
export function staffFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Staff Name",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Bio",
      description: "Short summary about staff member",
    },
    {
      type: "string",
      name: "department",
      label: "Department",
      options: [
        "Office",
        "Board Member",
        "Program Coordinator",
        "Support Worker",
        "Volunteer",
        "Facilities & Grounds",
        "Social Enterprise",
        "Farmyard",
        "Supported Employment",
      ],
      description: "What business department they are assigned to",
    },
    {
      type: "string",
      name: "division",
      label: "Division",
      options: [],
      description: "What division they are assigned to",
    },
    {
      type: "string",
      name: "role",
      label: "Role",
      description: "What is their role in the department",
    },
    {
      type: "string",
      name: "email",
      label: "Contact Email Address",
      description: "Their profile photo",
    },
    {
      type: "image",
      name: "src",
      label: "Profile Photo",
    },
    {
      type: "number",
      name: "weight",
      label: "Position",
      required: true,
      description:
        "Add a position for the order of staff members to appear in their grouped list. Lower numbers have higher priority (excluding 0 which is ignored)",
    },
  ] as TinaField[];
}
export function testimonial_blockFields() {
  return [
    {
      type: "string",
      name: "summary",
      label: "Quote",
      ui: {
        component: "textarea",
      },
      description: "Add the quote, testimonial or call out content ",
      required: true,
    },
    {
      type: "string",
      name: "heading",
      label: "Author",
      description: "The name of the person making the quote",
    },
    {
      type: "string",
      name: "subheading",
      label: "Location or company name",
      description:
        "Additional (less important) information to attach to the author",
    },
    {
      type: "image",
      name: "src",
      label: "Image",
    },
  ] as TinaField[];
}
export function text_blockFields() {
  return [
    {
      type: "string",
      name: "content",
      label: "Text Block",
      ui: {
        component: "textarea",
      },
      description: "Add a free-range text block",
    },
  ] as TinaField[];
}
export function video_blockFields() {
  return [
    {
      type: "string",
      name: "src",
      label: "Video Link",
      description: "Link to the video",
    },
  ] as TinaField[];
}
