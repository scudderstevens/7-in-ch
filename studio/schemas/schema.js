// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
// import alias from './documents/alias'
import artist from './documents/artist'
import genre from './documents/genre'
import post from './documents/post'
// import role from './documents/role'
import siteSettings from './documents/siteSettings'
import track from './documents/track'
// import user from './documents/user'

// Object types
import artistProfile from './objects/artistProfile'
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import descriptionPortableText from './objects/descriptionPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import trackPreview from './objects/trackPreview'
import youtube from './objects/youtube'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'content',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    artist,
    artistProfile,
    post,
    genre,
    mainImage,
    bodyPortableText,
    bioPortableText,
    descriptionPortableText,
    excerptPortableText,
    track,
    trackPreview,
    youtube,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
