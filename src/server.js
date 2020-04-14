const server = require('./App');
const port = 4000
require('./database');

server.listen(port, () => {
  console.log('Server On PORT: ', port );
})