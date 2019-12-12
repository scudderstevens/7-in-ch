import S from '@sanity/desk-tool/structure-builder'
// https://react-icons.netlify.com/#/icons/md

import settings from 'react-icons/lib/md/settings'
import person from 'react-icons/lib/md/person'
import alias from 'react-icons/lib/md/contacts'

const hiddenDocTypes = listItem =>
  ![ 'artist', 'category', 'genre', 'alias', 'post', 'siteSettings'].includes(listItem.getId())

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
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Artists')
        .icon(person)
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Genres')
        .schemaType('genre')
        .child(S.documentTypeList('genre').title('Genre')),
      S.listItem()
        .title('Alias')
        .icon(alias)
        .schemaType('alias')
        .child(S.documentTypeList('alias').title('Alias')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
