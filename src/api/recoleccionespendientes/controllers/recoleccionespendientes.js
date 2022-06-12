'use strict';

/**
 * A set of functions called "actions" for `recoleccionespendientes`
 */

module.exports = {
  async encontrarPendientes(ctx, next) {
    try {
      console.log(ctx.params)
      const id=ctx.params.id;
      const data= await strapi.service("api::recoleccionespendientes.recoleccionespendientes").encontrarPend(id);
      console.log('data es'+ data)
      ctx.body = data;
    } catch (err) {
      ctx.body = err;
    }
  }
};
