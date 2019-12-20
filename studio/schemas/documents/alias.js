export default {
  name: 'alias',
  type: 'document',
  title: 'Alias',
  fields: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main Image',
      description: `Preview image for listings`
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
