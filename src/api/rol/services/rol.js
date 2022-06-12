'use strict';

/**
 * rol service.
 */

module.exports = () => ({
    getRol:async(id)=>{
        try {
            const usuarioRol= await strapi.query("plugin::users-permissions.user").findOne({
                
                where: { id },
          
                populate: ["role"],
          
              });
              return usuarioRol?.role;
        } catch (error) {
            return error;
        }
    }
});
