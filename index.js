import { ServerClock } from "./lib/serverClock.js";
import { instance } from "./lib/geckosServer.js";
import * as events from "./events.js";
import * as express from "express";

const io = instance(3000);
const tick = new ServerClock(24, true);

function registerEventCallback(event, channel) {
  if (event === "onConnection") return;
  if (event === "onDisconnect") return;
  if (event === "onTick") return;
  const callback = events[event];
  console.log("register event: " + event);
  channel.on(event, (data) => {
    callback(data, channel, io);
  });
}

io.onConnection((channel) => {
  events.onConnection(channel, io);
  channel.onDisconnect(() => {
    events.onDisconnect(channel, io);
  });
  for (const event in events) {
    registerEventCallback(event, channel);
  }
});

tick.onTick((delta) => {
  events.onTick(delta, io);
});

const app = express();
const port = 80;
app.use(express.static("public"));
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
