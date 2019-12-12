import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({value}) => {
	const { url } = value
	const id = getYouTubeId(url)
	return (<YouTube videoId={id} />)
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.'
    }
  ],
  preview: {
  	select: {
  		url: 'url'
  	},
  	component: Preview
  }
}