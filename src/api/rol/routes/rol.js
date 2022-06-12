module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/rol',
     handler: 'rol.getRol',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
