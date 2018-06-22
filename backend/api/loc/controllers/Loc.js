'use strict';

/**
 * Loc.js controller
 *
 * @description: A set of functions called "actions" for managing `Loc`.
 */

module.exports = {

  /**
   * Retrieve loc records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.loc.fetchAll(ctx.query);
  },

  /**
   * Retrieve a loc record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.loc.fetch(ctx.params);
  },

  /**
   * Count loc records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.loc.count(ctx.query);
  },

  /**
   * Create a/an loc record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.loc.add(ctx.request.body);
  },

  /**
   * Update a/an loc record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.loc.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an loc record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.loc.remove(ctx.params);
  },

  /**
   * Add relation to a/an loc record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.loc.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an loc record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.loc.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an loc record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.loc.removeRelation(ctx.params, ctx.request.body);
  }
};
