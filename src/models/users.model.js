module.exports = function (app) {
	const db = app.get('database')
	db.schema.dropTableIfExists('users').then(function(){
		console.log('Dropping users table')
		return db.schema.createTable('users',function(table){
			console.log('Creating users table')
			table.increments('id')
			table.string('email').unique()
			table.string('password')
			table.string('avatar')
		})
	});
  return db
};
