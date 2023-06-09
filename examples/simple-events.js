/**  @type { import("../types").$Server }  */
const $io = global.$io;
/**  @type { import("../types").$State }   */
const $State = global.$State;

/*
  Simple auth
*/
export function authorization(auth, request, response) {
  const token = auth;
  console.log(`auth token: ${token}`);
  // if you return true, you will authorize the connection
  return {
    token: token,
  };
}

const Players = new $State("players");
const Variable = new $State("variables");
const Iventory = new $State("inventory");

export function onInit() {
  console.log("Server init");
  Variable.set("start", Date.now());
  Variable.set("speed", 20);
}

export function onConnection(player) {
  console.log(`${player.id} connected`);
  // listen all changes
  Variable.sync(player);
  Players.sync(player);
  // private sync
  Iventory.sync(player, player.id);
  // set player data
  Iventory.set(player.id, {
    update: Date.now(),
  });
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
  /*
    update player position
  */
  for (const playerId in Players.get()) {
    let player = Players.get(playerId);
    let speed = Variable.get("speed");
    let x = player.xAxis; // up or down
    let y = player.yAxis; // left or right
    if (x) player.x += (x > 0 ? 1 : -1) * delta * speed;
    if (y) player.y += (y > 0 ? 1 : -1) * delta * speed;
  }
}
/*
  Events
*/
export const events = {
  ping(player, data) {
    let ms = Date.now() - data;
    let inv = Iventory.get(player.id);
    inv.ping = ms
    // player.emit("pong", ms); //send back the ping
    player.emit("ping", Date.now()); //send a new ping request
  },
  move(player, data) {
    let playerData = Players.get(player.id);
    let [x, y] = data.split(":");
    playerData.xAxis = Number(x);
    playerData.yAxis = Number(y);
  },
};
