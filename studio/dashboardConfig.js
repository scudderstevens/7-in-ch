export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc56a2b12ce36a7512b25c3',
                  title: 'Sanity Studio',
                  name: '7-in-ch-studio',
                  apiId: '9cc0e054-6bfa-45c2-a125-34c40cbd97c5'
                },
                {
                  buildHookId: '5dc56a2bf7b585b1e3bc62a7',
                  title: 'Blog Website',
                  name: '7-in-ch',
                  apiId: '2ba1f99c-6f02-4009-8818-06b2d177d6eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scudderstevens/7-in-ch',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://7-in-ch.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
