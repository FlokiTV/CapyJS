import { $Client } from "../../../src/adapters.js";

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
      console.log(error);
    }
  }
}

export const adapter = (url = "http://127.0.0.1:3000/", callback) => {
  let client = geckos({
    url,
    authorization: "default",
  });
  client.onConnect((error) => {
    let channel = new Client(client);
    callback(channel, error);
  });
};

if (typeof window != "undefined") window.CapyAdapter = adapter;
