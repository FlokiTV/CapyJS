# CapyJS

<center>
<img src=".github/logo.svg" width="200">
</center>

Experience Hassle-Free Multiplayer Server Creation with CapyJS

# install

` npm i FlokiTV/CapyJS`

# start

`capy-js`

# `config.mjs`

```js
const Config = {
  adapter: {
    path: "geckos",
    options: {
      port: 3000,
    },
  },
  tick: {
    fps: 30,
    autoStart: true,
  },
  script: "events.mjs",
};

export default Config;
```

# `events.mjs`

```js

export function authorization(auth="token", ...args) {...}

export function onInit() {...}

export function onConnection(player) {...}

export function onDisconnect(player) {...}

export const events = {
    eventName: (player, data) =>{...}
}

```
# adapters
the adapters are the brigth between Capy to a any communication logic/protocol

## geckos adapter

```js
import geckos, { iceServers } from "@geckos.io/server";
import { $Client, $Server } from "capy-js";

export class Server extends $Server {
  #io;
  #port;
  #cfg;
  constructor(args = { port: 9208 }) {
    super();
    let { port } = args;
    this.isRunning = false;
    this.#port = port;
    this.#cfg = {
      iceServers,
    };
  }
  client(client) {
    return new Client(client);
  }
  emit(eventName = "", ...args) {
    if (this.isRunning) this.#io.emit(eventName, args);
  }
  listen() {
    this.#io = geckos(this.#cfg);
    this.#io.listen(this.#port);
    this.#io.onConnection((client) => {
      this.connect(this.client(client));
    });
    this.isRunning = true;
  }
  onSetup() {
    this.setAuthorization(this.authorization);
  }
  setAuthorization(authorization) {
    if (typeof authorization === "function") {
      this.#cfg.cors = { allowAuthorization: true };
      this.#cfg.authorization = authorization;
    } else throw new Error("authorization is not a function.");
  }
}

class Client extends $Client {
  #client;
  constructor(client) {
    super(client.id);
    this.#client = client;
  }
  emit(eventName, ...args) {
    this.#client.emit(eventName, ...args);
  }
  on(eventName, callback) {
    this.#client.on(eventName, (data) => {
      try {
        callback(this, data);
      } catch (error) {
        console.log(error);
      }
    });
  }
  onDisconnect(callback) {
    try {
      this.#client.onDisconnect(callback);
    } catch (error) {
      console.log(error)
    }
  }
}
```
Note: the `capy-js` only handle the server side.