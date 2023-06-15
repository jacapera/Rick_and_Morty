const { conn } = require('./DB_connection');
const server = require('./app.js');
const saveApiData = require('./controllers/saveApiData');
const PORT = 3001;


server.listen(PORT, async () => {
    await conn.sync({ force: true });
    await saveApiData();
    console.log("Server raised in port: " + PORT);
});

/**
 * conn.sync({ force: true})
 *  .then(() => {
 *    server.listen(PORT, () => console.log("Server listening on port: " + PORT))
 *  })
 */