import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog appt',

  projectId: '7v5revpa',
  dataset: 'production',

  plugins: [deskTool()],
  
  basePath:"/admin",

  schema: {
    types: schemaTypes,
  },
})
