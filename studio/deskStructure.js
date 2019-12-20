import S from '@sanity/desk-tool/structure-builder'

// https://react-icons.netlify.com/#/icons/md
import settings from 'react-icons/lib/md/settings'
import artist from 'react-icons/lib/md/portrait'
import alias from 'react-icons/lib/md/person-pin'
import post from 'react-icons/lib/md/library-books'
import track from 'react-icons/lib/md/music-video'

const hiddenDocTypes = listItem =>
  ![ 'siteSettings', 'post', 'artist', 'track', 'category', 'genre', 'alias' ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(settings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Blog posts')
        .icon(post)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Post')),
      S.listItem()
        .title('Artists')
        .icon(artist)
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artist Details')),
      S.listItem()
        .title('Tracks')
        .icon(track)
        .schemaType('track')
        .child(S.documentTypeList('track').title('Track Details')),
      S.listItem()
        .title('Genres')
        .schemaType('genre')
        .child(S.documentTypeList('genre').title('Genre')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
