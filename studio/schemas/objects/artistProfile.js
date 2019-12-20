export default {
  name: 'artistProfile',
  type: 'object',
  title: 'Artist Profile',
  fields: [
  {
    name: 'artist',
    type: 'reference',
    to: [{
        type: 'artist'
      }]
  }
  ],
  preview: {
    select: {
    title: 'artist.name',
    media: 'artist.mainImage.asset'
    }
  }
}