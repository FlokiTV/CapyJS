import { $Client, $Server } from "../../../src/adapters.js";
import * as SocketIO from "socket.io";

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
      this.#client.on("disconnect", callback);
    } catch (error) {
      console.log(error);
    }
  }
}

export class Server extends $Server {
  #io;
  #port;
  #cfg;
  constructor(args = { port: 3000, options: {} }) {
    super();
    let { port, options } = args;
    this.isRunning = false;
    this.#port = port;
    // https://socket.io/docs/v4/server-options/
    this.#cfg = {
      cors: {
        origin: '*',
        allowedHeaders: ["authorization"]
      }
    };
  }
  client(client) {
    return new Client(client);
  }
  emit(eventName = "", ...args) {
    if (this.isRunning) this.#io.emit(eventName, args);
  }
  listen() {
    this.#io = new SocketIO.Server(this.#cfg);
    this.#io.listen(this.#port);
    this.#io.on("connection", (client) => {
      this.connect(this.client(client));
    });
    this.isRunning = true;
  }
  onSetup() {
    this.setAuthorization(this.authorization);
  }
  setAuthorization(authorization) {
    if (typeof authorization === "function") {
      console.log(authorization)
      // this.#cfg.cors = { allowAuthorization: true };
      // this.#cfg.authorization = authorization;
    } else throw new Error("authorization is not a function.");
  }
}
