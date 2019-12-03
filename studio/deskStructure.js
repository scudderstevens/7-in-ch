import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  ![ 'artist', 'category', 'genre', 'aka', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
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
        .icon(MdPerson)
        .schemaType('artist')
        .child(S.documentTypeList('artist').title('Artists')),
      S.listItem()
        .title('Genres')
        .schemaType('genre')
        .child(S.documentTypeList('genre').title('Genre')),
      S.listItem()
        .title('AKAs')
        .icon(MdPerson)
        .schemaType('aka')
        .child(S.documentTypeList('aka').title('AKAs')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
