export const api = {
  listItems:[
    {
      title:"Title with children",
      children:[
        {
          title:"Child with actions",
          actions:[
            {
              label: "Download",
              url: "/download1",
            },
            {
              label: "Read more",
              url: "/more2",
            },
          ],
        },
        {
          title:"Child without actions",
          actions:[],
        },
      ]
    },
    {
      title: "Title with child",
      children:[
        {
          title:"Child without actions",
        }
      ]
    },
    {
      title: "Title without children",
      children:[]
    }
  ],
  moreLinks:[
    {
      title:"DASO",
      children:[]
    },
    {
      title:"Young Leaders Programme",
      children:[]
    },
    {
      title:"DA Abroad",
      children:[]
    },
    {
      title:"DAWN",
      children:[]
    },
    {
      title:"LGBTI",
      children:[]
    },
    {
      title:"Blue the Network",
      children:[]
    },
    {
      title:"DA Youth",
      children:[]
    },
  ]
}
