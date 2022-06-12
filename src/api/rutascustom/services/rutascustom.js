'use strict';

/**
 * rutascustom service.
 */

module.exports = () => ({
    todasRutas: async() =>{
        try{
            const rutas=await strapi.entityService.findMany('api::ruta.ruta',{
                fields:[ 'nombre',"observaciones"],
                populate: ['acopio'],
                
            });
            
            //
            let entriesReduced;
            return rutas;
        
        } catch(err){
            return err;
        }
    },
    rutasRecolector: async(idRecolector)=>{
        try {
            
            const rutasRecolector=await strapi.entityService.findMany('api::recolector.recolector',{
                fields:["id","primer_nombre","primer_apellido" ],
                populate:["rutas"],
                filters:{
                    id:{$eq:idRecolector}
                },
            });
            return rutasRecolector;
        } catch (error) {
            
        }
    }

});
