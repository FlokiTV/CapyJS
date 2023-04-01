/**
 * A class that handles loading and setup of a server adapter based on a configuration file.
 */
export class $Manager {
    tick: any;
    /** @type {import("./adapters").$Server} server*/
    server: import("./adapters").$Server;
    config: any;
    /**
     * Sets a callback function to be executed after the initial setup has completed.
     * @param {Function} callback - The callback function to execute.
     */
    onload(callback: Function): void;
    #private;
}
