export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec0532c68f986cefc01fcbc',
                  title: 'Sanity Studio',
                  name: 'westportlandumc-studio',
                  apiId: '34fe7be6-724e-4ec5-b324-ab4789c0c2b2'
                },
                {
                  buildHookId: '5ec0532c9a0850d56fe509d2',
                  title: 'Blog Website',
                  name: 'westportlandumc',
                  apiId: '1915ba0f-cce1-450b-a5e7-6c3c7a4b4917'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neilbateman/westportlandumc',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://westportlandumc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
