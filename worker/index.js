const keys = require('./keys');
const redis = require('redis');

const redisClient = resis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000, //retry reconn 
});

const redisSubscription = redisClient.duplicate();

// fibonacci recursive solution
// not quite ideal
function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
};

redisSubscription.on('message', (channel, message) => {
  //hset = hashset
  redisClient.hset('values', message, fib(parseInt(message)));
});

//subscribe to insert event;
redisSubscription.subscribe('insert');

