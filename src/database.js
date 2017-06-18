const knex = require('knex');

module.exports = function () {
	const app = this;
	const config = app.get('postgres');
	const db = knex(config);
	app.set('database', db);
};
