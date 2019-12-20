export default {
    name: 'track',
    title: 'Track',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: `Titles should be catchy, descriptive, and not too long`
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: `Some frontends will require a slug to be set to be able to show the post`,
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'artistMain',
            type: 'reference',
            to: [{ type: 'artist' }]
        },
        {
            name: 'artistsAdditional',
            type: 'array',
            title: 'Additional Artists',
            of: [{
                type: 'reference',
                to: { 
                  type: 'artist'
                }}
            ]
          },
          {
            name: 'genre',
            type: 'array',
            title: 'Genre',
            of: [{
                type: 'reference',
                to: { 
                  type: 'genre'
                }}
            ]
          },
          {
            name: 'mainImage',
            type: 'mainImage',
            title: 'Main image',
            description: `Preview image for listings`,
            options: {hotspot: true}
          },
          {
            name: 'youtube',
            type: 'youtube'
          },
          {
            name: 'description',
            type: 'descriptionPortableText'
          }
    ],
    preview: {
        select: {
          track: 'name',
          artist: 'artistMain',
          media: 'mainImage',
          slug: 'slug'
        },
        prepare ({track, artist, slug, media }) {
            const title = track+` – `+artist.name
            const subtitle = `/tracks/${slug.current}/`
            return {
                title,
                subtitle,
                media
            }
        }
      }
}