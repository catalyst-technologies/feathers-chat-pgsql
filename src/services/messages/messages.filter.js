module.exports = {
  created(data, connection, hook) {
    console.log(data);
    console.log(connection);
    console.log(hook);
  },
  updated(data, connection, hook) {}
}
