const knex = require('knex');

module.exports = function () {
	const app = this;
	const config = app.get('db_config');
	const db = knex(config);
	app.set('database', db);
};
