export default {
  name: 'trackPreview',
  type: 'object',
  title: 'Track Preview',
  fields: [
    {
      name: 'track',
      type: 'reference',
      to: [{
        type: 'track'
      }]
    }
  ],
  preview: {
    select: {
      title: 'track.name',
      media: 'track.image.asset'
    }
  }
}
