// Load the dependencies
const server = require('server');
const { jsonp } = server.reply;

// The URL fragment between "spreadsheets/d/" and "/edit"
const id = '1r88-oTXJMNvzyDhLsNv8wGTCuuVq-pV7xYh1RxsSg_g';
const drive = require('drive-db')(id);

// Launch the server in port 3000
server(async () => {
  // Local or remote (depends on the cache expiration)
  const db = await drive.update(id, 'db.json');
  // Render the index with the user data
  return jsonp({ consumption: db.find() });
});
