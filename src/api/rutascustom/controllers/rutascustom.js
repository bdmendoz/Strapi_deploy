'use strict';

/**
 * A set of functions called "actions" for `rutascustom`
 */

module.exports = {
  async findAll(ctx, next){
    try {
      const data= await strapi.service('api::rutascustom.rutascustom').todasRutas();
      console.log(strapi.services)
      ctx.body= data;
    } catch (error) {
      ctx.badRequest('Page Ruta Custom Error', {moreDetals: error})
    }
  },
  async ejemploPost(ctx, next){
    console.log('este ensppoint post funciona!');
    ctx.body={};
  },
  async findRutasRecolector(ctx, next){
    try {
      const id=ctx.params.id
      const data= await strapi.service('api::rutascustom.rutascustom').rutasRecolector(id);
      ctx.body=data;
    } catch (error) {
      
    }
  }
};
