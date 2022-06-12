module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/rutascustom',
     handler: 'rutascustom.findAll',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
     path: '/rutascustom',
     handler: 'rutascustom.ejemploPost',
     config: {
      policies: [],
      middlewares: [],
    },
    },
    {
      method: 'GET',
      path: '/rutasrecolector/:id',
      handler: 'rutascustom.findRutasRecolector',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
