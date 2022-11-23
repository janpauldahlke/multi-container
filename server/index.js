const keys = require('./keys');

// -- Express setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// -- postgres client
// will store the indicies given from the user input
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on('error', () => console.log('Lost PG Connection'));
//init table
pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.error('Err on connect',err));
});

// -- Redis client setup
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000, //retry reconn 
});

const redisPublisher = redisClient.duplicate();

// --Express Route handlers

app.get('/', (req, res) => {
  res.send('Hello RouteRoute');
});

//gets all from postgress
app.get('/values/all', async (req, res) => {
  const values = await pgClient.query('SELECT * from values');
  res.send(values.rows);
});

//gets redis all redis values ever
app.get('/values/current', async (req, res) => {
  //redis version uncapable of promise so callback
  redisClient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

// input from the react app 
app.post('/values', async (req, res) => {
  const index = req.body.index;
  if (parseInt(index) > 40) {
    // arbitray max for fib to avoid long computations
    return res.status(422);
  }
  //setting index in redis
  redisClient.hset('values', index, 'Nothing yet');
  // wakes up the worker on insert
  redisPublisher.publish('insert', index);
   //setting index in postgres
  pgClient.query('INSERT INTO values (numbner) VALUES($1)', [index]);
  //se
  res.send({
    working: true,
  });
});

//port
app.listen(5000, err => console.log('Listening on Port 500'));


