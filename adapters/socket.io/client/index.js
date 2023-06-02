import { $Client } from "../../../src/adapters.js";
import { io } from "socket.io-client";

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

export const adapter = (url = "http://127.0.0.1:3000/", callback) => {
  try {
    let client = io(url, {
      auth: {
        token: "default",
      },
    });
    client.on("connect", () => {
      let channel = new Client(client);
      callback(channel, null);
    });
  } catch (error) {
    callback(null, error);
  }
};

if (typeof window != "undefined") window.CapyAdapter = adapter;
