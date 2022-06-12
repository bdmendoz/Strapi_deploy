module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/productoresruta',
     handler: 'productoresruta.findProductores',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
