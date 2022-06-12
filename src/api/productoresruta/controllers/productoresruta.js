'use strict';


/**
 * A set of functions called "actions" for `productoresruta`
 */

module.exports = {
  async findProductores(ctx, next) {
    try {
      const data=await strapi.service('api::productoresruta.productoresruta').todosProductores();
      console.log(strapi.services)
      ctx.body = data;
    } catch (err) {
      ctx.badRequest('Page ProductoresRuta Error',{moreDetails:err});
    }
  }
};
