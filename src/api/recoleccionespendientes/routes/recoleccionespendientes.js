module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/recoleccionespendientes/:id',
     handler: 'recoleccionespendientes.encontrarPendientes',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
