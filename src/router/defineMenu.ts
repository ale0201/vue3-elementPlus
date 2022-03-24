export const defineMenus = [
  {
    index: '1',
    path: '',
    name: '菜单一',
    children: [
      {
        index: '/home/menu1',
        path: '/home/menu1',
        name: 'sub菜单1-1',
      },
      {
        index: '/home/menu2',
        path: '/home/menu2',
        name: 'sub菜单1-2',
      }
    ]
  },
  {
    index: '2',
    path: '/home/menu3',
    name: '菜单二',
  },
  {
    index: '3',
    path: '',
    name: '菜单三',
    children: [
      {
        index: '3-1',
        path: '',
        name: 'sub菜单3-1',
        children: [
          {
            index: '3-1-1',
            path: '/home/menu1',
            name: 'subsub菜单3-1-1',
          },
          {
            index: '3-1-2',
            path: '/home/menu2',
            name: 'subsub菜单3-1-2',
          }
        ]
      },
      {
        index: '3-2',
        path: '/home/menu3',
        name: 'sub菜单3-2',
      }
    ]
  },
];