'use strict';

/**
 * productor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::productor.productor');
