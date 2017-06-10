module.exports = function (app) {
  const db = app.get('database')
  db.schema.dropTableIfExists('messages').then(function(){
	  console.log('Dropped message table')
	  return db.schema.createTable('messages',function(table){
		  console.log('Creating message table')
		  table.increments('id')
		  table.string('text')
      table.string('createdAt')
      table.string('userId')
	  });
  })
  return db
};
