'use strict';

/**
 * productoresruta service.
 */

module.exports = () => ({
    todosProductores:async()=>{
        try{
            const productores=await strapi.entityService.findMany('api::productor.productor',{
                fields:[ 'codigo',"primer_nombre","primer_apellido"],
                populate :['ruta'],
            });
            return productores;

        }
        catch(err){
            return err;
        }
    }
});
