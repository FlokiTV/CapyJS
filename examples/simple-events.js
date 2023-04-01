import * as Types from "../index.js";

/**
 * @typedef {Types.$Server} $Server
 * @typedef {Types.$Ticker} $Ticker
 * @typedef {Types.$State} $State
 */

/** @type {$Server} */
const io = $io;

/*
  Simple auth
*/
export function _authorization(auth, request, response) {
  const token = auth;
  console.log(`auth token: ${token}`);
  // if you return true, you will authorize the connection, without adding any data to channel.userData
  return {
    token: token,
  };
  // if you return false, the server will respond with 401 (unauthorized)
  return false;
  // if you return a number between 100 and 599, the server will respond with the respective HTTP status code
  return 400; // will return 400 (Bad Request)
  return 404; // will return 404 (Not Found)
  return 500; // will return 500 (Internal Server Error)
}

/**
 * @type { $State } Players
 */
const Players = new $State("players");
/**
 * @type { $State } Variables
 */
const Variable = new $State("variables");
/**
 * @type { $Ticker } Ticker
 */
const Ticker = new $Ticker();

Ticker.onTick(() => {
  // console.log("tick");
});
Variable.set("start", Date.now());
Variable.set("speed", 20);

export function onConnection(player) {
  console.log(`${player.id} connected`);
  Variable.sync(player);
  Players.sync(player);
  Players.set(`${player.id}`, {
    id: player.id,
    x: 0,
    y: 0,
    xAxis: 0,
    yAxis: 0,
  });
}
export function onDisconnect(player) {
  console.log(`${player.id} got disconnected`);
  Players.delete(player.id);
}
/*
  Tick Event
*/
export function onTick(delta) {
  console.log(delta);
  /*
    update player position
  */
  for (const player in Players.get()) {
    console.log(player);
  }
  return;
  for (let playerId in Object.fromEntries(Players)) {
    let player = Players.get(playerId);
    let speed = Variable.get("speed");
    let x = player.xAxis;
    let y = player.yAxis;
    if (x) player.x += (x > 0 ? 1 : -1) * delta * speed;
    if (y) player.y += (y > 0 ? 1 : -1) * delta * speed;
    state.set(`${playerId}.x`, Number(player.x));
    state.set(`${playerId}.y`, Number(player.y));
  }
}
/*
  Events
*/
export const events = {
  ping(player, data) {
    let ms = Date.now() - data;
    player.emit("pong", ms); //send back the ping
    player.emit("ping", Date.now()); //send a new ping request
  },
  move(player, data) {
    let playerData = Players.get(player.id);
    let [x, y] = data.split(":");
    playerData.xAxis = Number(x);
    playerData.yAxis = Number(y);
    Players.set(player.id, playerData);
    state.set(`${player.id}.xAxis`, Number(x));
    state.set(`${player.id}.yAxis`, Number(y));
  },
};
