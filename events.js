export function ping(data, channel, io) {
  let ms = Date.now() - data;
  channel.emit("pong", ms);
}
