'use strict';

/**
 * make-up service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::make-up.make-up');
