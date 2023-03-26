const Players = new Map();
export function onConnection(channel, io) {
  console.log(`${channel.id} connected`);
  Players.set(channel.id, {
    x: 0,
    y: 0,
    xAxis: 0,
    yAxis: 0,
  });
}
export function onDisconnect(channel, io) {
  console.log(`${channel.id} got disconnected`);
  Players.delete(channel.id);
}
/*
  Tick Event
*/
export function onTick(delta, io) {
  const json = JSON.stringify(Object.fromEntries(Players));
  io.emit("sync:players", json);
  /*
    update player position
  */
  for (let playerId in Object.fromEntries(Players)) {
    let player = Players.get(playerId);
    let speed = 10;
    let x = player.xAxis;
    let y = player.yAxis;
    if (x) player.x += (x > 0 ? 1 : -1) * delta * speed;
    if (y) player.y += (y > 0 ? 1 : -1) * delta * speed;
  }
}
/*
  Custom Events
*/
export function ping(data, channel, io) {
  let ms = Date.now() - data;
  channel.emit("pong", ms); //send back the ping
  channel.emit("ping", Date.now(), { reliable: true }); //send a new ping request
}

// export function sync(data = "", channel, io) {
//   const json = JSON.stringify(Object.fromEntries(Players));
//   io.emit("sync:players", json);
// }

export function move(data, channel, io) {
  let player = Players.get(channel.id);
  let [x, y] = data.split(":");
  player.xAxis = Number(x);
  player.yAxis = Number(y);
  Players.set(channel.id, player);
}
