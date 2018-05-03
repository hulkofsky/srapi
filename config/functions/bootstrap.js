'use strict';

const send = require('koa-send');
const _ = require('lodash');

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 */

const frontRoutesPrefixes = [
	'\\location',
	'\\contact',
	'\\stance'
];

module.exports = cb => {
	strapi.app.use(async (ctx, next) => {
		let isFrontRoute = false;

		if (ctx.request.url === '/') {
			isFrontRoute = true;
		}

		frontRoutesPrefixes.map((prefix) => {
			if (_.startsWith(ctx.request.url, prefix)) {
				isFrontRoute = true;
			}
		})

		if (isFrontRoute) {
			console.log('serving index');
			await send(ctx, 'index.html', { root: __dirname + '/../../public' });	
		} else {
			await next();
		}
	});

  	cb();
};
