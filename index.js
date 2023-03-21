import { ServerClock } from "./lib/serverClock.js";
import { instance } from "./lib/geckosServer.js";
import * as events from "./events.js";

const io = instance(3000);
const tick = new ServerClock(60, true);

io.onConnection((channel) => {
  channel.onDisconnect(() => {
    console.log(`${channel.id} got disconnected`);
  });
  for (const event in events) {
    const callback = events[event];
    console.log("register event: " + event);
    channel.on(event, (data) => {
      callback(data, channel, io);
    });
  }
});

tick.onTick((delta) => {});
