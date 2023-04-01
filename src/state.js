import { Observable } from "@gullerya/object-observer"; // https://github.com/gullerya/object-observer
import * as _ from "lodash-es";
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

/*
 * Represents a state object with observable changes.
 *
 * @class
 */
export class $State {
  #state;
  /**
   * Creates a new state instance.
   *
   * @param {string} name - Name of the state instance.
   * @param {object} state - Default state object.
   */
  constructor(name, state = {}) {
    this.name = name;
    this.#state = Observable.from(state);
  }
  /**
   * Sets a value at a specific path within the state object.
   *
   * @param {string|string[]} path - The path to set.
   * @param {*} value - The value to set.
   * @returns {this}
   */
  set(path, value) {
    _.set(this.#state, path, value);
    return this;
  }
  /**
   * Gets a value at a specific path within the state object.
   * If no path is provided, returns the entire state object.
   *
   * @param {string|string[]} [path] - The path to get.
   * @returns {*}
   */
  get(path = null) {
    if (!path) return this.json();
    return _.get(this.#state, path);
  }
  /**
   * Deletes a value at a specific path within the state object.
   *
   * @param {string|string[]} path - The path to delete.
   */
  delete(path) {
    return _.unset(this.#state, path);
  }
  /**
   * Syncs state changes to an emitter.
   *
   * @param {EventEmitter} emitter - The emitter to sync changes to.
   * @param {string} [path=null] - The path to sync changes for.
   */
  sync(emitter, path = null) {
    /**
     * Change callback function.
     *
     * @callback onChange
     * @param {Array} changes - An array of changes.
     *
     * @type {onChange} callback
     */
    const callback = (changes) => {
      let _changes = [];
      for (const change of changes) {
        _changes.push({
          type: change.type,
          path: change.path,
          value: change.value,
        });
      }
      emitter.emit(`sync:${this.name}`, _changes);
    };
    if (path) this.subscribe(path, callback);
    else this.onChange(callback);
    emitter.on(`sync:${this.name}:init`, () => {
      emitter.emit(`sync:${this.name}:init`, this.get());
    });
  }
  /**
   * Subscribes to changes at a specific path within the state object.
   *
   * @param {string} path
   * @param {onChange} callback
   */
  subscribe(path, callback) {
    Observable.observe(this.#state, callback, { path: path });
  }
  /**
   * Subscribes to changes in the entire state object.
   *
   * @param {onChange} callback
   */
  onChange(callback) {
    Observable.observe(this.#state, (changes) => {
      callback(changes);
    });
  }
  /**
   * Returns the entire state as JSON object.
   *
   * @returns {object}
   */
  json() {
    return JSON.parse(JSON.stringify(this.#state));
  }
}
