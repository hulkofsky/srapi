'use strict';

/**
 * Dottable.js controller
 *
 * @description: A set of functions called "actions" for managing `Dottable`.
 */

module.exports = {

  /**
   * Retrieve dottable records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.dottable.fetchAll(ctx.query);
  },

  /**
   * Retrieve a dottable record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.dottable.fetch(ctx.params);
  },

  /**
   * Count dottable records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dottable.count(ctx.query);
  },

  /**
   * Create a/an dottable record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dottable.add(ctx.request.body);
  },

  /**
   * Update a/an dottable record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dottable.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dottable record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dottable.remove(ctx.params);
  },

  /**
   * Add relation to a/an dottable record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.dottable.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an dottable record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.dottable.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an dottable record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.dottable.removeRelation(ctx.params, ctx.request.body);
  }
};
