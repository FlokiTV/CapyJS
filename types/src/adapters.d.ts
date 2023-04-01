/**
 * Represents a server that can manage client connections and events.
 *
 * @class
 * @public
 */
export class $Server {
    /**
     * The function used to authorize client connections.
     *
     * @type {function}
     * @public
     */
    public authorization: Function;
    /**
     * The function called when a new client connects to the server.
     *
     * @type {function}
     * @public
     */
    public onConnection: Function;
    /**
     * The function called when a client disconnects from the server.
     *
     * @type {function}
     * @public
     */
    public onDisconnect: Function;
    /**
     * The function called on each tick of the server's game loop.
     *
     * @type {function|null}
     * @public
     */
    public onTick: Function | null;
    /**
     * A dictionary of event names and their corresponding event handlers.
     *
     * @type {object}
     * @public
     */
    public events: object;
    /**
     * Sets up the server by importing and executing a script.
     *
     * @public
     * @async
     * @param {string} scriptPath - The path to the script file to execute.
     * @returns {void}
     */
    public setup(scriptPath: string): void;
    onInit: any;
    /**
     * Connects a client to the server.
     *
     * @public
     * @param {Object} mpClient - The client object to connect.
     * @returns {void}
     */
    public connect(mpClient: any): void;
    /**
     * Sets event listeners on a client object.
     *
     * @private
     * @param {Object} mpClient - The client object to set events on.
     * @returns {void}
     */
    private setClientEvents;
    /**
     * Emits an event to all connected clients.
     * @param {string} eventName - The name of the event to be emitted.
     * @param {...any} args - The arguments to be passed to the event handler function.
     */
    emit(eventName?: string, ...args: any[]): void;
    listen(): void;
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
    constructor(id: string);
    id: string;
    /**
     * Emits an event to the client.
     *
     * @public
     * @param {string} eventName - The name of the event to emit.
     * @param {...*} args - Additional arguments to pass along with the event.
     * @returns {null}
     */
    public emit(eventName?: string, ...args: any[]): null;
    /**
     * Registers a callback to be called when an event is received from the client.
     *
     * @public
     * @param {string} eventName - The name of the event to listen for.
     * @param {function} callback - The function to call when the event is received.
     * @returns {null}
     */
    public on(eventName?: string, callback?: Function): null;
    /**
     * Called when the client disconnects from the server.
     *
     * @public
     * @returns {void}
     */
    public onDisconnect(): void;
}
