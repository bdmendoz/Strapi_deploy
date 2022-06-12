'use strict';

/**
 * recolector service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recolector.recolector');
