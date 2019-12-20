export default {
    name: 'physicalMedia',
    title: 'Physical Media',
    type: 'document',
    fields: [
        {
            name: 'product',
            type: 'document',
            title: 'Details',
            fields: [
                {
                    name: 'isProduct',
                    type: 'boolean'
                }
            ]
        },
        {
            name: 'tracks',
            type: 'array',
            title: 'Track Listing',
            of: [{
                type: 'reference',
                to: { 
                  type: 'track'
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
            name: 'mediaImages',
            type: 'array',
            description: `Images of the physical media packaging, cover art and liner notes.`,
            of: [{
                    type: 'mainImage',
                    options: {hotspot: true}
            }]
        },
        {
            name: 'discogs',
            type: 'url',
            title: 'Discogs URL'
          }
    ],
    preview: {
        select: {
            media: 'mainImage'
        }
    }
}