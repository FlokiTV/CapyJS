import geckos, { iceServers } from "@geckos.io/server";
import { $Client, $Server } from "../src/index.js";

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
