import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'blog appt',

  projectId: '7v5revpa',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  
  basePath:"/admin",

  schema: {
    types: schemaTypes,
  },
})
