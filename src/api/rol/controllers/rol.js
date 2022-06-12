'use strict';
const  jwt_decode= require('jwt-decode');
/**
 * A set of functions called "actions" for `rol`
 */

module.exports = {
  getRol: async (ctx, next) => {
    try {
      const auth= ctx.request?.header?.authorization;
      var id;
      if(auth){
        let token = auth.split(" ")[1];
        const decodedToken=jwt_decode(token, {complete: true});
        console.log("token decodificado "+  decodedToken['id'].toString());
        id= decodedToken['id'].toString();
        //console.log(token+":este es el token")
      }
      //console.log(ctx);
      console.log(id +"este es el id");
      // console.log(ctx.payload.id+"bla")
      // console.log(ctx.estate);
      const data=await strapi.service("api::rol.rol").getRol(id);
      ctx.body = data;
       
    } catch (err) {
      ctx.body = err;
    }
  }
};
