export default {
  name: 'genre',
  type: 'document',
  title: 'Genre',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
