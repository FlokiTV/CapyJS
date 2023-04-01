/**
 * Global types
 *
 * @callback onChange
 * @param {Change[]} change - Observer.
 *
 * @typedef {Object} Change
 * @property {string} type
 * @property {string[]} path
 * @property {*} value
 * @property {*} oldValue
 * @property {object} object
 */
export class $State {
    /**
     * Creates a new state instance.
     *
     * @param {string} name - Name of the state instance.
     * @param {object} state - Default state object.
     */
    constructor(name: string, state?: object);
    name: string;
    /**
     * Sets a value at a specific path within the state object.
     *
     * @param {string|string[]} path - The path to set.
     * @param {*} value - The value to set.
     * @returns {this}
     */
    set(path: string | string[], value: any): this;
    /**
     * Gets a value at a specific path within the state object.
     * If no path is provided, returns the entire state object.
     *
     * @param {string|string[]} [path] - The path to get.
     * @returns {*}
     */
    get(path?: string | string[]): any;
    /**
     * Deletes a value at a specific path within the state object.
     *
     * @param {string|string[]} path - The path to delete.
     */
    delete(path: string | string[]): any;
    /**
     * Syncs state changes to an emitter.
     *
     * @param {EventEmitter} emitter - The emitter to sync changes to.
     * @param {string} [path=null] - The path to sync changes for.
     */
    sync(emitter: EventEmitter, path?: string): void;
    /**
     * Subscribes to changes at a specific path within the state object.
     *
     * @param {string} path
     * @param {onChange} callback
     */
    subscribe(path: string, callback: onChange): void;
    /**
     * Subscribes to changes in the entire state object.
     *
     * @param {onChange} callback
     */
    onChange(callback: onChange): void;
    /**
     * Returns the entire state as JSON object.
     *
     * @returns {object}
     */
    json(): object;
    #private;
}
/**
 * Global types
 */
export type onChange = (change: Change[]) => any;
/**
 * Global types
 */
export type Change = {
    type: string;
    path: string[];
    value: any;
    oldValue: any;
    object: object;
};
