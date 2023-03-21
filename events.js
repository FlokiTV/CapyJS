const Players = new Map();

export function onConnection(channel, io) {
  console.log(`${channel.id} connected`);
  Players.set(channel.id, {
    x: 0,
    y: 0,
  });
  channel.emit("ping", Date.now());
}
export function onDisconnect(channel, io) {
  console.log(`${channel.id} got disconnected`);
  Players.delete(channel.id);
}
/*
  Tick Event
*/
export function onTick(delta, io) {
  // io.emit("ping", Date.now());
  const json = JSON.stringify(Object.fromEntries(Players));
  io.emit("sync:players", json);
}
/*
  Custom Events
*/
export function ping(data, channel, io) {
  let ms = Date.now() - data;
  channel.emit("pong", ms);
  channel.emit("ping", Date.now());
}
export function sync(data = "", channel, io) {
  const json = JSON.stringify(Object.fromEntries(Players));
  io.emit("sync:players", json);
}
export function move(data, channel, io) {
  let player = Players.get(channel.id);
  let [x, y] = data.split(":");
  x = Number(x);
  y = Number(y);
  if (x) player.x += x > 0 ? 1 : -1;
  if (y) player.y += y > 0 ? 1 : -1;

  Players.set(channel.id, player);
}
