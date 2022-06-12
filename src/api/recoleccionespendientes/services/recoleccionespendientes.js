"use strict";
const { dateToColombianZone } = require("../../../utils/timezone.js");
/**
 * recoleccionespendientes service.
 */

module.exports = () => ({
  encontrarPend: async (idRuta) => {
    try {
      const fechaHoy = dateToColombianZone();

      console.log(fechaHoy);
      console.log("holaa " + fechaHoy);
      //lista de productores que pertenecen a una ruta cuyo id es igual al pasado por parametro
      const todosProductores=await strapi.db.query("api::productor.productor").findMany({
        populate:["ruta", "recolecciones"],
        where:{
          //recolecciones:null,
          ruta:{
            id:idRuta
          },
        }
      });
      
      const prodsPendientes=todosProductores.filter(
                            (productor)=>productor.recolecciones===null || 
                            !productor.recolecciones.some((rec)=>rec.fecha===fechaHoy))
      console.log(
        prodsPendientes +
          "esto es lo de productores de la ruta cuitiva que no han seido recolectados"
      );
    
      return prodsPendientes;
    } catch (err) {
      console.log(err + " que sad :c");
    }
  },
});
