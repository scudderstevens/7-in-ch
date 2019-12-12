export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
    {
    name: 'artistDetails',
    type: 'document',
    title: 'Artist Details',
    fields: [
      {
        name: 'realName',
        type: 'string',
        title: 'Real Name'
      },
      {
        name: 'alias',
        title: 'Alias',
        type: 'array',
        of: [{
            type: 'reference',
            to: {
              type: 'alias'
            }}
        ]
      },
      {
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography'
      },
      {
        name: 'website',
        type: 'url',
        title: 'Artist Website'
      },
      {
        name: 'discogs',
        type: 'url',
        title: 'Discogs Profile'
      }
    ]
  }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
