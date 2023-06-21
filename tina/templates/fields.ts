// Meta fields
import {
  //GroupListFieldPlugin,
  type TinaField,
} from 'tinacms'
export const metaDataFields: TinaField[] = [
  {
    type: 'string',
    name: 'title',
    label: 'Page Title',
    required: true,
    isTitle: true,
  },
  {
    type: 'string',
    name: 'description',
    label: 'Short Summary of Page',
    ui: {
      component: 'textarea',
    },
    required: true,
  },
]
