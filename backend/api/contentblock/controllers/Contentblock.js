'use strict';

/**
 * Contentblock.js controller
 *
 * @description: A set of functions called "actions" for managing `Contentblock`.
 */

module.exports = {

  /**
   * Retrieve contentblock records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.contentblock.fetchAll(ctx.query);
  },

  /**
   * Retrieve a contentblock record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.contentblock.fetch(ctx.params);
  },

  /**
   * Create a/an contentblock record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contentblock.add(ctx.request.body);
  },

  /**
   * Update a/an contentblock record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contentblock.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contentblock record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contentblock.remove(ctx.params);
  },

  /**
   * Add relation to a/an contentblock record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.contentblock.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an contentblock record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.contentblock.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an contentblock record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.contentblock.removeRelation(ctx.params, ctx.request.body);
  }
};
