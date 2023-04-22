import { $Ticker } from "./ticker.js";
import { $State } from "./state.js";


/**
 * Represents a server that can manage client connections and events.
 *
 * @class
 * @public
 */
export class $Server {
  /**
   * Creates a new instance of the Server class.
   *
   * @constructor
   */
  constructor() {
    /**
     * The function used to authorize client connections.
     *
     * @type {function}
     * @public
     */
    this.authorization = () => {
      return true;
    };
    /**
     * The function called when a new client connects to the server.
     *
     * @type {function}
     * @public
     */
    this.onConnection = (client) => {
      console.log(`new client connection`);
    };
    /**
     * The function called when a client disconnects from the server.
     *
     * @type {function}
     * @public
     */
    this.onDisconnect = (client) => {
      console.log(`client disconnect`);
    };
    /**
     * The function called on each tick of the server's game loop.
     *
     * @type {function|null}
     * @public
     */
    this.onTick = null;
    /**
     * A dictionary of event names and their corresponding event handlers.
     *
     * @type {object}
     * @public
     */
    this.events = {};
  }
  /**
   * Sets up the server by importing and executing a script.
   *
   * @public
   * @async
   * @param {string} scriptPath - The path to the script file to execute.
   * @returns {void}
   */
  async setup(scriptPath) {
    global.$io = this;
    global.$State = $State;
    global.$Ticker = $Ticker;
    const script = await import(`file://${scriptPath}`);
    if (script.authorization) this.authorization = script.authorization;
    if (script.onConnection) this.onConnection = script.onConnection;
    if (script.onDisconnect) this.onDisconnect = script.onDisconnect;
    if (script.onTick) this.onTick = script.onTick;
    if (script.onInit) this.onInit = script.onInit;
    if (script.events) this.events = script.events;
    /**
     * The function called when setup is complete.
     *
     * @type {function|null}
     * @public
     */
    if (this.onSetup) this.onSetup();
  }
  /**
   * Connects a client to the server.
   *
   * @public
   * @param {Object} mpClient - The client object to connect.
   * @returns {void}
   */
  connect(mpClient) {
    try {
      this.onConnection(mpClient);
    } catch (error) {
      console.error(error);
    }
    mpClient.onDisconnect(() => {
      try {
        this.onDisconnect(mpClient);
      } catch (error) {
        console.error(error);
      }
    });
    this.setClientEvents(mpClient);
  }
  /**
   * Sets event listeners on a client object.
   *
   * @private
   * @param {Object} mpClient - The client object to set events on.
   * @returns {void}
   */
  setClientEvents(mpClient) {
    for (const eventName in this.events) {
      mpClient.on(eventName, (...args) => {
        try {
          this.events[eventName](...args);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
  /**
   * Emits an event to all connected clients.
   * @param {string} eventName - The name of the event to be emitted.
   * @param {...any} args - The arguments to be passed to the event handler function.
   */
  emit(eventName = "", ...args) {}
  listen() {}
}

/**
 * Represents a client connected to the server.
 *
 * @class
 * @public
 */
export class $Client {
  /**
   * Creates a new instance of the Client class.
   *
   * @constructor
   * @param {string} id - The unique identifier for the client.
   */
  constructor(id) {
    this.id = id;
  }
  /**
   * Emits an event to the client.
   *
   * @public
   * @param {string} eventName - The name of the event to emit.
   * @param {...*} args - Additional arguments to pass along with the event.
   * @returns {null}
   */
  emit(eventName = "", ...args) {
    return null;
  }
  /**
   * Registers a callback to be called when an event is received from the client.
   *
   * @public
   * @param {string} eventName - The name of the event to listen for.
   * @param {function} callback - The function to call when the event is received.
   * @returns {null}
   */
  on(eventName = "", callback = null) {
    return null;
  }
  /**
   * Called when the client disconnects from the server.
   *
   * @public
   * @returns {void}
   */
  onDisconnect() {}
}
