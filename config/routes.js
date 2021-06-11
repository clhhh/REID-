export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/user',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              // {
              //   name: 'list.table-list',
              //   icon: 'table',
              //   path: '/list',
              //   component: './TableList',
              // },
              {
                name: '工作台',
                icon: 'table',
                path: '/workspace',
                component: './WorkSpace',
              },
              // {
              //   name: '比赛',
              //   icon: 'table',
              //   path: '/matchlist',
              //   routes: [
              //     {
              //       path: '/matchlist/list',
              //       name: '比赛列表',
              //       icon: 'setting',
              //       component: './match',
              //     }
                 
              //   ],
               
              // },
              {
                name: '监控',
                icon: 'table',
                path: '/monitor_list',
                component: './monitor',
              },
              {
                name: '用户管理',
                icon: 'table',
                path: '/user_list',
                component: './userlist',
              },
              {
                name: '案件',
                icon: 'table',
                path: '/case_list',
                // component: './caselist',
                routes: [
                  {
                    path: '/case_list',
                    name: '案件统计',
                    icon: 'setting',
                    component: './caselist',
                  }
                 
                ],
              },
              {
                name: '个人中心',
                icon: 'table',
                path: '/pensonal',
                component: './personalcenter',
              },  
              // {
              //   name: '组件测试',
              //   icon: 'table',
              //   path: '/component',
              //   component: './componentList',
              // },            
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
