export default {
    name: 'user',
    type: 'document',
    title: 'User',
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
        name: 'bio',
        type: 'bioPortableText',
        title: 'Biography'
      },
      {
        name: 'role',
        title: 'Role',
        type: 'reference',
        of: [{ type: 'role' }]
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'role.name',
        media: 'image'
      }
    }
  }